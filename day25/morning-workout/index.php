<?php

$data = ['fact' => "In Holland’s embassy in Moscow, Russia, the staff noticed that the two Siamese cats kept meowing and clawing at the walls of the building. Their owners finally investigated, thinking they would find mice. Instead, they discovered microphones hidden by Russian spies. The cats heard the microphones when they turned on.", 'length' => 318];

$array = []; // more facts

$array[] = $data;

$array[] = ['fact' => "The cat has 500 skeletal muscles (humans have 650)", 'length' => 82];

$array[] = ['fact' => "A cat only has the ability to move their jaw up and down, not side to side like a human can.", 'length' => 132];

$array[] = ['fact' => "Cats should not be fed tuna exclusively, as it lacks taurine, an essential nutrient required for good feline health. Make sure you have the proper Pet supplies to keep your cat happy and healthy.", 'length' => 222];

header('Content-Type: application/json');

// shuffle($array);



echo json_encode($array[rand(0, 3)]);