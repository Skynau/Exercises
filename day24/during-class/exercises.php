<?php
$first_name = 'Daniel';
$surname = 'Slezak';

echo "First name: $first_name<br> Last name: $surname";

echo 'First nameL '.$first_name.'';

$year_of_birth = 1989;
$height = 190;

echo "Year of birth: $year_of_birth<br> Height: $height<br>";

define('SERVER_SOFTWARE', 'Apache');
echo "This server is running on " .SERVER_SOFTWARE. "<br>";

function greet_world ()
{
    echo 'Hello World <br>';
}
greet_world();

function greet ($whom) {
    echo "Hello $whom <br>";
}

greet('Prague');

function greeting ($whom) {
    return "Hello $whom <br>";
    
}

echo greeting('Brno');

function greet2 ($whom) {
    function greeting2 ($whom) {
    return "Hello $whom <br>";
    }
    echo greeting2($whom);
}

greet2('Ostrava');


function greet ($whom)


function myCar($car) {
    return $car;
}

function echoMyCar($car) {
    echo myCar($car);
}
echoMyCar('Skoda')
