<?php

require_once 'DBBlackbox.php';
require_once 'Artist.php';

$artist = new Artist;

$artist->first_name = $_POST['first_name'] ?? $artist->first_name;
$artist->second_name = $_POST['second_name'] ?? $artist->second_name;
$artist->year_of_birth = $_POST['year_of_birth'] ?? $artist->year_of_birth;
$artist->genre = $_POST['genre'] ?? $artist->genre;

$id = insert($artist);

var_dump($artist);