<?php

require_once 'DBBlackbox.php';
require_once 'Song.php';
require_once 'Session.php';

$songs = select(0, 0, 'Song');

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
        <?php foreach ($songs as $song) : ?>
            <li>
                <?= $song->name ?>
                <a href="edit.php?id=<?= $song->id?>">Edit</a>
            </li>
        <?php endforeach; ?>
    </ul>

    <a href="create.php">Create a new one</a>

</body>
</html>