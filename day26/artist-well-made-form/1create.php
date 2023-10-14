<?php

require_once 'DBBlackbox.php';
require_once 'Artist.php';

$artist = new Artist;

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
    <form action="2insert.php" method="post">
 
        Name:<br>
        <input type="text" name="first_name" value="<?= htmlspecialchars((string)$artist->first_name) ?>"><br>
        <br>

        Surname:<br>
        <input type="text" name="second_name" value="<?= htmlspecialchars((string)$artist->second_name) ?>"><br>
        <br>

        YoB:<br>
        <input type="number" name="year_of_birth" value="<?= htmlspecialchars((int)$artist->year_of_birth) ?>"><br>
        <br>

        Genre:<br>
        <input type="text" name="genre" value="<?= htmlspecialchars((string)$artist->genre) ?>"><br>
        <br>
    
        <button type="submit">Save</button>
 
    </form>

</body>
</html>