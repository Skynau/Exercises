<?php

// normal:
// function raiseNumber($insertedNumber) {
//     echo $insertedNumber = $insertedNumber +1;
// }

// $number = 1;
// raiseNumber($number);
// echo '<br>';
// echo $number;

function raiseNumber(&$insertedNumber) {
    echo $insertedNumber = $insertedNumber +1;
}

$number = 1;
raiseNumber($number);
echo '<br>';
echo $number;
echo '<br>';
raiseNumber($number);

function headliner($text, $importance = 1) {
    return "<h$importance>$text</h$importance>";
}
echo headliner('Foo', 2);