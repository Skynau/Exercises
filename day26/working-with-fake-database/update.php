<?php

require_once 'DBBlackbox.php';
require_once '../during-class-class-declaration/AudioTrack.php';

$track = find(1, 'AudioTrack');

$track->length = 190;
$track->year_of_release = 2333;
$track->author_name = 'BuBiBa';

update(1, $track);

var_dump($track);