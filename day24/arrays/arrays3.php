<?php

// $movies = [
//   'The Shawshank redemption',
//   'The Godfather',
//   'The Godfather II',
//   'Dark Knight', 
//   '12 angry men', 
//   'Schindler\'s list',
//   'Pulp fiction',
//   'Lord of the Rings: Return of the King',
//   'The good, the bad and the ugly',
//   'Fight club'
// ];

// echo "<ol>"; 
// foreach ($movies as $title) {
//     echo "<li>" . $title . "</li>";
// }
// echo "</ol>";

// sort($movies);

// echo "<ol>"; 
// for ($i = 0; $i < count($movies); $i++) {
//     echo "<li>{$movies[$i]}</li>";
// }
// echo "</ol>";


$movie_names = [
  'tt0468569' => 'Dark Knight', 
  'tt0050083' => '12 angry men', 
  'tt0108052' => 'Schindler\'s list',
  'tt0110912' => 'Pulp fiction',
  'tt0167260' => 'Lord of the Rings: Return of the King',
  'tt0111161' => 'The Shawshank redemption',
  'tt0071562' => 'The Godfather II',
  'tt0060196' => 'The good, the bad and the ugly',
  'tt0137523' => 'Fight club',
  'tt0068646' => 'The Godfather',
];
$movie_ratings = [
  'tt0111161' => 9.2,
  'tt0068646' => 9.2,
  'tt0071562' => 9.0,
  'tt0468569' => 8.9, 
  'tt0050083' => 8.9, 
  'tt0108052' => 8.9,
  'tt0110912' => 8.9,
  'tt0167260' => 8.9,
  'tt0060196' => 8.9,
  'tt0137523' => 8.8
];

// ksort($movie_names);
// ksort($movie_ratings);


// echo "<ol>"; 
// foreach ($movie_names as $key => $movie) {
//     // $movie = $movie . ' ' . $movie_ratings[$key];
//     // echo "<li>$movie</li>";
//     echo "<li>$movie" . " " . "$movie_ratings[$key]";
// }
// echo "</ol>";



asort($movie_ratings);

echo "<ol>";
foreach ($movie_ratings as $id => $rating) {
    echo "<li>$rating" . " " . "$movie_names[$id]";
}
echo "</ol>";

arsort($movie_ratings);

echo "<ol>";
foreach ($movie_ratings as $id => $rating) {
    echo "<li>$rating" . " " . "$movie_names[$id]";
}
echo "</ol>";

echo "<ol>";
foreach ($movie_ratings as $id => $rating) {
    echo "<li>$movie_names[$id]" . " " . "$rating";
}
echo "</ol>";