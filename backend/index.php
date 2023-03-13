<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

if ($_FILES) {
  $file = $_FILES['file']['tmp_name'];
  if (($handle = fopen($file, "r")) !== FALSE) {
    $data = array();
    while (($row = fgetcsv($handle, 1000, ",")) !== FALSE) {
      $data[] = $row;
    }
    fclose($handle);
    header('Content-Type: application/json');
    echo json_encode($data);
  }
  exit();
}
?>