<?php

$students = [
    1 => 'John',
    5342 => 'Era',
    4325 => 'What'
];

for ($i = 0; $i < count($students); $i++) {
    echo '<li>'.$students[$i].'</li>';
};