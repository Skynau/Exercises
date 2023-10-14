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
$new_array = array_map(function ($person) {
    return [
        'full_name' => $person['name'] . ' ' . $person['surname'],
        'job' => $person['occupation']
    ];
}, $old_array);

echo '<pre>';
var_dump($new_array);
