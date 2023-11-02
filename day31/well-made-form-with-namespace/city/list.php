<?php

require_once 'bootstrap.php';
$cities = DB::select('
    SELECT *
    FROM `cities`
    ORDER BY `id` DESC
    LIMIT 0, 20
', [], 'City');

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <table>
        <thead>
            <th>Id</th>
            <th>Name</th>
            <th>District</th>
            <th>Population</th>
            <th>Edit</th>
        </thead>
        <?php foreach ($cities as $city) : ?>
            <tr>
                <td>
                    <?= $city->country_id ?>
                </td>
                <td>
                    <?= $city->name ?>
                </td>
                <td>
                    <?= $city->district ?>
                </td>
                <td>
                    <?= $city->population ?>
                </td>
                <td>
                    <a href="edit.php?id=<?= $city->id?>">Edit</a>
                </td>
            </tr>
        <?php endforeach ?>
    </table>
    <a href="edit.php">EDIT</a>
</body>
</html>