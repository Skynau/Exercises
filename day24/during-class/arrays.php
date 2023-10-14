<?php

$array = [1,2,3];



echo max($array);
echo '<br>';
array_push($array, 10);

foreach($array as $value) {
    echo $value;
    echo '<br>';
}

// or:

$array2 = [
    "first" => 1,
    "second" => 2,
    "third" => 3
];

foreach ($array2 as $key => $value) {
    echo $key;
    echo $value;
    echo '<br>';
}


?>

<script>

const array = [1,2,3];

array.forEach(element => {
    console.log(element);
});


</script>