<!-- <?php
 
$array = array();
for($i = 1; $i <= 100; $i++) {
    array_push($array, $i);
}
 
$string = "I am a simple string";
 
// Create a variable $arrayDouble containing the double of each value of $array
$arrayDouble = array();
foreach ($array as $int) {
        $int = $int * 2;
        array_push($arrayDouble, $int);
    }


print_r($arrayDouble);

echo '<br>';
 
// Create two variables $arrayEven and $arrayOdd containing the Even numbers contained in $array and the Odd numbers contained in $array
$arrayEven = array();
foreach ($array as $int) {
    if ($int % 2 === 0) {
        array_push($arrayEven, $int);
    }
}



$arrayOdd = array();
foreach ($array as $int) {
    if ($int % 2 != 0) {
        array_push($arrayOdd, $int);
    }
}

print_r($arrayEven);

echo '<br>';
print_r($arrayOdd);
 
// // Create a variable $arrayProduct containing the product of each numbers of $array
$arrayProduct = array();
foreach ($array as $int) {
    $int = $int * $int;
    array_push($arrayProduct, $int);
}

echo '<br>';
print_r($arrayProduct);
 
// // Create a variable $stringUpper containing the $string value in uppercase
$stringUpper = strtoupper($string);
print_r($stringUpper);
 
// // Create a variable $stringFirstUp containing the $string value with the first character in uppercase
$stringFirstUp = ucfirst($string);
print_r($stringFirstUp); 
?>
-->

<?php
 
function square($val) 
{
    return $val*$val;
}
 
function squareRoot($val)
{
    return sqrt($val);
}
 
function calcHypotenuse($firstSideLength,$secondSideLength) 
{
    
    $hypotenuseLength = squareRoot((square($firstSideLength) + square($secondSideLength)))
 
    return $hypotenuseLength;
}
 
$firstSideLength = null;
do {
    $firstSideLength = readline("Please enter the first side length: ");
} while($firstSideLength == null);
 
$secondSideLength = null;
do {
    $secondSideLength = readline("Please enter the second side length: ");
} while($secondSideLength == null);
 
echo calcHypotenuse($firstSideLength, $secondSideLength); 
?>


