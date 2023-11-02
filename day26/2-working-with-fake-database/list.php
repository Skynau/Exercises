<?php

require_once 'DBBlackbox.php';
require_once 'Audiotrack.php';

$tracks = select(null, null, 'Audiotrack');


foreach ($tracks as $track) {
    echo $track->author . '<br>';
    
    echo $track->song . '<br>';
    
    echo $track->length . '<br>';
    
    echo $track->year . '<br>';
}