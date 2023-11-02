<?php

require_once 'DBBlackbox.php';
require_once 'Audiotrack.php';

$track_one = new Audiotrack;
$track_one->author = 'Olympic';
$track_one->song = 'Oldies';
$track_one->length = 236;
$track_one->year = 1978;

$id = insert($track_one);

echo 'A new record has been inserted with id ' . $id;