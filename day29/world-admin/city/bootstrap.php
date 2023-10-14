<?php

require_once 'DB.php';
require_once 'helpers.php';
require_once 'Session.php';
require_once 'City.php';
require_once 'alerts.php';

session();

DB::connect(
    'localhost',
    'world',
    'root',
    ''
);