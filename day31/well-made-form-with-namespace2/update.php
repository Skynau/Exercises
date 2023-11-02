<?php

require_once 'bootstrap.php';


$id = $_GET['id'];

$song = find( $id, 'Song' );

$song->name = $_POST['name'] ?? $song->name;
$song->author = $_POST['author'] ?? $song->author;
$song->length = $_POST['length'] ?? $song->length;
$song->album = $_POST['album'] ?? $song->album;

update($id, $song);

session()->flash('success message', 'Song was successfully saved.');
// $_SESSION['success message'] = 'Song was successfully saved.';

header('Location: edit.php?id=' . $id);
exit();