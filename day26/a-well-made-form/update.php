<?php

require_once 'DBBlackbox.php';
require_once 'Song.php';

$id = $_GET['id'];

$song = find( $id, 'Song' );

$song->name = $_POST['name'] ?? $song->name;
$song->author = $_POST['author'] ?? $song->author;
$song->length = $_POST['length'] ?? $song->length;
$song->album = $_POST['album'] ?? $song->album;

update($id, $song);