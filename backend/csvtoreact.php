<?php

// Check if csv file was sent
if (isset($_FILES['csv_file'])) {

  // Open CSV for reading
  $csv_file = $_FILES['csv_file']['tmp_name'];
  $handle = fopen($csv_file, 'r');
  
  // Making new object SimpleXMLElement
  $xml = new SimpleXMLElement('<root/>');
  
  // Read from CSV-file
  while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
    
    // Adding row XML-element
    $row = $xml->addChild('row');
    foreach($data as $index=>$value) {
      
      // Adding every column CSV-file like child element XML-element row
      $row->addChild('column' . ($index + 1), $value);
    }
  }
  
  // Closing CSV-file
  fclose($handle);
  
  // Saving XML-file on the server
  $xml_file = 'path/to/xml/file.xml';
  $xml->asXML($xml_file);
  
  // Sending data into React in JSON
  header('Content-Type: application/json');
  echo json_encode(['data' => $xml->asXML()]);
}

?>