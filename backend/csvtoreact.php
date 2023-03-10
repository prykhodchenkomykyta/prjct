<?php

// Проверяем, был ли отправлен CSV-файл
if (isset($_FILES['csv_file'])) {

  // Открываем CSV-файл для чтения
  $csv_file = $_FILES['csv_file']['tmp_name'];
  $handle = fopen($csv_file, 'r');
  
  // Создаем новый объект SimpleXMLElement
  $xml = new SimpleXMLElement('<root/>');
  
  // Читаем строки из CSV-файла
  while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
    
    // Добавляем строку как дочерний элемент XML-элемента
    $row = $xml->addChild('row');
    foreach($data as $index=>$value) {
      
      // Добавляем каждый столбец CSV-файла как дочерний элемент XML-элемента row
      $row->addChild('column' . ($index + 1), $value);
    }
  }
  
  // Закрываем CSV-файл
  fclose($handle);
  
  // Сохраняем XML-файл на сервере
  $xml_file = 'path/to/xml/file.xml';
  $xml->asXML($xml_file);
  
  // Отправляем данные React в виде JSON
  header('Content-Type: application/json');
  echo json_encode(['data' => $xml->asXML()]);
}

?>