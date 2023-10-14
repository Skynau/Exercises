<?php

require_once 'DBBlackbox.php';
require_once '../during-class-class-declaration/AudioTrack.php';

$multiple = select(null, null, 'AudioTrack');

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
        <?php foreach ($multiple as $track) : ?>
            <li>
                <?= $track->name ?>
                by <?= $track->author_name ?>
            </li>

        <?php endforeach; ?>
    </ul>

</body>
</html>