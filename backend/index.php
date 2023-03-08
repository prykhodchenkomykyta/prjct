<?php

$file = '129073_A-with name revised 3-3-2023.csv';

if (($handle = fopen($file, 'r')) !== false) {
    $headers = fgetcsv($handle, 1000, ',');
    $data = array();

    while (($row = fgetcsv($handle, 1000, ',')) !== false) {
        $data[] = array_combine($headers, $row);
    }

    fclose($handle);

    header('Content-Type: application/json');
    echo json_encode($data);
}
?>