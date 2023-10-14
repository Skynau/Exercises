<?php

require_once 'DB.php';
require_once 'DB_functions.php';
require_once 'Country.php';


//THis is the connection:
DB::connect(
    'localhost',
    'world',
    'root',
    ''
);

$results = DB::select(
    'SELECT * FROM `countries` WHERE `population` > ?',
    [
        20000000
    ],
    'Country'
);

var_dump($results);

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <ul>
    <?php foreach ($results as $country) : ?>

        <li><?= $country->name?></li>

    <?php endforeach; ?>
    </ul>
</body>
</html>