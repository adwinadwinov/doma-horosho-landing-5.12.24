<?php

function getData(string $file): array {
    $res = [];

    if (($handle = fopen($file, 'r')) !== false) {
        $headers = fgetcsv($handle, 1000, ',');
        
        $rows = [];
        while (($data = fgetcsv($handle, 1000, ',')) !== false) {
            $rows[] = array_combine($headers, $data);
        }
        fclose($handle);

        $res = $rows;
    } else {
        echo "Не удалось открыть файл!";
    }

    return $res;
}

$catalog['kitchens'] = getData(__DIR__ . '/kitchens.csv');
$catalog['wardrobes'] = getData(__DIR__ . '/wardrobes.csv');
