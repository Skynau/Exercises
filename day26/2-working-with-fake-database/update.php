<?php

require_once 'DBBlackbox.php';
require_once 'Audiotrack.php';


$id = 5;
$track_1 = find($id, 'Audiotrack');

$track_1->author = 'Elvis';

update($id, $track_1);

var_dump($track_1);