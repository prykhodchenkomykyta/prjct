<?php

    $inputPath = "/home/erutberg/Radovan/DataPrep/IN/composecure/";
    $outputPath = "/var/TSSS/Files/";
    $sProcessedDir = "/home/erutberg/Radovan/DataPrep/processed/composecure/";
    $sCustomerName = "COMPOSECURE";

    try {
        $file = fopen('129073_A-with name revised 3-3-2023.csv', 'r');
    } catch (Exception $e) {
        die('Error: Unable to open csv file, please check the file name and path');
    }

    try {
        $xml = new SimpleXMLElement('<?xml version="1.0" encoding="utf-8"?>' . "\n" .
            '<InputData>' . "\n\t" .
            '</InputData>' . "\n"
        );
    } catch (Exception $e) {
        die('Error: Unable to create XML file');
    }

    $sequence = 0;

    $units = $xml->addChild('Units');

    while (($row = fgetcsv($file)) !== false) {

        if ($sequence == 0) {
            $sequence++;
            continue;
        }

        $unit = $units->addChild('Unit');

        $unit->addAttribute('Name',$sCustomerName);
        $unit->addAttribute('Type', 'Card');
        $unit->addAttribute('Priority', '1');

        $unitProduct = $unit->addChild('Product');
        $unitProduct->addChild('Product', 'TacoBell');

        $unitCustomerData = $unit->addChild('CustomerUnitData');
        $unitCustomerData->addAttribute('InputFormat', 'Hex');

        $unit->addAttribute('Name', 'Card_', $sequence);
        $unit->addAttribute('Type', 'Card');
        $unit->addAttribute('Priority', '1');

        $unitMatching = $unit->addChild('UnitMatching', 'TRACK_1_UNIT_MATCHING_IS_OPTIONAL_WHOLE_ELEMENT_CAN REMOVED'); //matching cards, this is optional
        $unitMatching->addAttribute('Encoding', 'ASCII');
        $unitMatching->addAttribute('InputFormat', 'Text');

        $dataFields = $unit->addChild('DataFields');

        $dataField = $dataFields->addChild('DataField');
        $dataField->addAttribute('Name', 'Sequence');
        $value = $dataField->addChild('Value', $sequence++);
        $value->addAttribute('InputFormat', 'Text');

        $dataField = $dataFields->addChild('DataField');
        $dataField->addAttribute('Name', 'CardNumber');
        $value = $dataField->addChild('Value', $row[0]);
        $value->addAttribute('InputFormat', 'Text');

        $dataField = $dataFields->addChild('DataField');
        $dataField->addAttribute('Name', 'Pin');
        $value = $dataField->addChild('Value', $row[1]);
        $value->addAttribute('InputFormat', 'Text');

        $dataField = $dataFields->addChild('DataField');
        $dataField->addAttribute('Name', 'Track1');
        $value = $dataField->addChild('Value', $row[2]);
        $value->addAttribute('InputFormat', 'Hex');

        $dataField = $dataFields->addChild('DataField');
        $dataField->addAttribute('Name', 'Track2');
        $value = $dataField->addChild('Value', $row[3]);
        $value->addAttribute('InputFormat', 'Hex');

        $dataField = $dataFields->addChild('DataField');
        $dataField->addAttribute('Name', 'Name');
        $value = $dataField->addChild('Value', $row[4]);
        $value->addAttribute('InputFormat', 'Text');
    }

    fclose($file);
    $xml->asXML('129073_A-with name revised 3-3-2023.xml');
    rename($inputPath . "/" .
        "129073_A-with name revised 3-3-2023.csv", $sProcessedDir . "/" . "129073_A-with name revised 3-3-2023.csv");

    echo 'Conversion complete using php converter!';
?>