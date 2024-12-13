<?php
$file = __DIR__ . '/catalog.csv';;

$catalog;

if (($handle = fopen($file, 'r')) !== false) {
    $headers = fgetcsv($handle, 1000, ',');
    
    $rows = [];
    while (($data = fgetcsv($handle, 1000, ',')) !== false) {
        $rows[] = array_combine($headers, $data);
    }
    fclose($handle);
    
    $catalog['kitchens'] = $rows;
} else {
    echo "Не удалось открыть файл!";
}
