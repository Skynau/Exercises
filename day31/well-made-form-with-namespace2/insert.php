<?php

require_once 'bootstrap.php';

//validation:
$valid = true;
$errors = [];

if (empty($_POST['name'])) {
    $valid = false;
    $errors[] = 'Name is a required field';
}

if (!is_numeric($_POST['length'])) {
    $valid = false;
    $errors[] = 'Length must be a number';
}

if ($valid === false) {
    session()->flash('errors', $errors);
    session()->flashRequest();
    // session_start()
    // $_SESSION['errors'] = $errors;
    // $_SESSION['request_data'] = $_POST;

    header('Location: create.php');
    exit();
}


$song = new Song;

$song->name = $_POST['name'] ?? $song->name;
$song->author = $_POST['author'] ?? $song->author;
$song->length = $_POST['length'] ?? $song->length;
$song->album = $_POST['album'] ?? $song->album;

$id = insert($song);

session()->flash('success_message', 'Song was successfully created.');

// $_SESSION['success message'] = 'Song was successfully created.';

header('Location: list.php');
exit();