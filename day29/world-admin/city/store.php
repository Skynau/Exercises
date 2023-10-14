<?php

require_once 'bootstrap.php';

$data = $_POST;
$id = $data['id'] ?? null;

$errors = [];
if (!isset($data['name'])){
    $errors[]= 'The name field is required';
}
if (!isset($data['district'])){
    $errors[]= 'The district field is required';
}
if (!isset($data['population'])){
    $errors[]= 'The population field is required';
}
if(!empty($errors)) {
    session()->flash('errors', $errors);
    header("Location: edit.php?id=$city->id");
    exit();
}

$city = new City();
if ($haveId = isset($data['id'])) {
    $city->findById($data['id']);
    $action = 'edited';
}

$action = 'inserted';

$city->name = $data['name'];
$city->population = $data['population'];
$city->district = $data['district'];
$city->save();

//Not needed anymore:
// if ($haveId) {
//     $city->update();
// } else {
//     $city->insert();
// }



session()->flash('success_messages', 'The city was inserted');

//DONT need anymore, putting to class City and changing $city to this
// DB::insert("INSERT INTO `cities` (`name`, `population`, `district`) 
// VALUES (`$city->name`, `$city->population`, `$city->district`)");


header("Location: edit.php?id=$city->id");
