<?php

require_once 'DBBlackbox.php';
require_once 'Song.php';
require_once 'Session.php';


$valid = true;
$errors = [];
if (empty($_POST['name'])) {
    $valid = false;
    $errors[] = 'You must set the name';
}

if (empty($_POST['author'])) {
    $valid = false;
    $errors[] = 'You must set the author';
}

if (empty($_POST['length'])) {
    $valid = false;
    $errors[] = 'You must set the length';
}

if (is_numeric($_POST['length']) === false) {
    $valid = false;
    $errors[] = 'The length must be a number';
}

if (empty($_POST['album'])) {
    $valid = false;
    $errors[] = 'You must set the album';
}

if (!$valid) {
    session_start();
    $_SESSION['errors'] = $errors;
    $_SESSION['request_data'] = $_POST;
    header('Location: edit.php');
    exit();
}

session_start();

$id = $_GET['id'];

$song = find($id, 'Song');
$song->name = $_POST['name'] ?? $song->name;
$song->author = $_POST['author'] ?? $song->author;
$song->length = $_POST['length'] ?? $song->length;
$song->album = $_POST['album'] ?? $song->album;

update($id, $song);

$_SESSION['success_message'] = 'Saving successful';

header('Location: edit.php?id=' . $id);
