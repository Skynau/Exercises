<?php

$links = [
    '/' => 'Home',
    '/Eshop' => 'Eshop',
    '/Contacts' => 'Contacts',
    '/Terms' => 'Terms & Conditions'
];

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inline PHP excercise</title>
</head>
<body>
    <h1>Inline PHP excercises</h1>

    <?php
    // is the current user administrator?
    $user_is_admin = false;
    ?>
 
    <ul class="menu">

        <?php foreach ($links as $url => $link) : ?>
            <li><a href="<?=$url?>"><?= $link?></a></li>
        <?php endforeach; ?>

        <!-- <li><a href="#">Home</a></li>
        <li><a href="#">Eshop</a></li>
        <li><a href="#">Contact</a></li> -->
        <?php
        if ($user_is_admin === true) : ?>
            <li><a href="#">Link just for administrators</a></li>
            <li><a href="#">Another link just for administrators</a></li>
        <?php endif; ?>
    </ul>
</body>
</html>

