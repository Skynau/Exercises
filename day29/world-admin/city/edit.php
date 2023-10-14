<?php

require_once 'bootstrap.php';


$city = new City();
$formType = 'Create';
if (isset($_GET['id'])) {
    $id = $_GET['id'];
    $city->findById($_GET['id']);
    $formType = "Edit";
}
$successMessages = session()->get('success_messages');


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php include 'alerts.php' ?>
    <h1><?=$formType?> City form</h1>
    <form action="store.php" method="post">
        <input type="hidden" name="id" value="<?=$city->id?>">
        <label for="name">Name</label>
        <input type="text" name="name" value="<?=$city->name?>">
        <label for="population">Population</label>
        <input type="number" name="population" value="<?=$city->population?>" min="0">
        <label for="district">District</label>
        <input type="text" name="district" value="<?=$city->district?>">
        <input type="submit" value="<?=$formType?>">
    </form>

</body>
</html>