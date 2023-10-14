<?php

require_once 'DBBlackbox.php';
require_once '../during-class-class-declaration/AudioTrack.php';

$track = find(1, 'AudioTrack');

var_dump($track);