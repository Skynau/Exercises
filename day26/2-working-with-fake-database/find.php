<?php

require_once 'DBBlackbox.php';
require_once 'Audiotrack.php';

$id = 1;

$track_1 = find($id, 'Audiotrack');

var_dump($track_1);