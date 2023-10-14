<?php

require_once 'DBBlackbox.php';
require_once 'Artist.php';

$artists = select(0,0,'Artist');

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
        <?php foreach ($artists as $artist) : ?>
            <li>
                <?= $artist->second_name ?>

                <a href="3edit.php?id=<?=$artist->id ?>">EDIT</a>
            </li>

        <?php endforeach ?>
        
    </ul>
</body>
</html>