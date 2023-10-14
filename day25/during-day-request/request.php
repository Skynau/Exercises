<?php

var_dump($_GET);    
var_dump($_POST);

// useful: from now on always know if available or not the variable

if (isset($_GET['name'])) {
    $name = $_GET['name'];
} else {
    //create name with a value, can be null to not have the variable available or some other value
    $name = null;
}

//from now on there is ALWAYs a variable $name

//equivalent to the 5-6 lines:
$name = $_GET['name'] ?? null;

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <a href="?name=Zdenek">Greet Zdenek</a>

    <a href="?name=Bob">Greet Bob</a>
    
    <!-- building a http link: -->
    <a href="?<?= http_build_query(
        ['name'=> 'Joe Tribiany* &+ plus']
    )?>">Greet Joe</a>

    <?php if (isset($_GET['name'])) : ?>
    
    <h1>Hello <?= $_GET['name']?></h1>

    <?php else : ?>

    <h1>Please supply name</h1>

    <?php endif ?>

    <!-- now can: -->

    <?php if ($name) : ?>
    
    <h1>Hello <?= $name?></h1>

    <?php else : ?>

    <h1>Please supply name</h1>

    <?php endif ?>

</body>
</html>