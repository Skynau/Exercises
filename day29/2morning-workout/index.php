<?php

include 'Person.php';

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

foreach ($old_array as $array_item)
{
    $new_array[] = ['full_name' => $array_item['name'] . ' ' . $array_item['surname'], 'job' => $array_item['occupation']];
}

var_dump($new_array);
