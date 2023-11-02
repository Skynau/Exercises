<?php

function my_comparison_function($value1, $value2)
{
    if($value1 < $value2) {
        return -1;
    } elseif($value1 == $value2) {
        return 0;
    } elseif($value1 > $value2) {
        return 1;
    }
}
 
$array = [3, 1, 2, 6, -1];
 
usort($array, 'my_comparison_function');

print_r($array);
