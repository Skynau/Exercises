<?php

require_once 'DBBlackbox.php';
require_once '../during-class-class-declaration/AudioTrack.php';

$audioTrack = new AudioTrack;
$audioTrack->name = 'Whatever';
$audioTrack->author_name = 'Paul';

$id = insert($audioTrack);

var_dump($id);