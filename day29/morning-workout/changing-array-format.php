<?php

$old_array = [
    [
        'name' => 'Bruce',
        'surname' => 'Wayne',
        'occupation' => 'billionaire'
    ],
    [
        'name' => 'Clark',
        'surname' => 'Kent',
        'occupation' => 'reporter'
    ],
    [
        'name' => 'Peter',
        'surname' => 'Parker',
        'occupation' => 'photographer'
    ]
];

$new_array = [];

// var_dump($old_array[0]['name']);

foreach ($old_array as $subarray) {
    foreach ($subarray as $key => $value) {
        $new_array[]
    }
}
