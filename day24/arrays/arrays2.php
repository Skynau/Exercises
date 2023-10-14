<?php

// $students = [];
// $students[] = 'Thomas';
// $students[] = 'Kathy';
// $students[] = 'Eve';
// $students[] = 'Brand';

// foreach ($students as $name) {
//     echo 'meet ' . $name . '<br>';
// }

// $divisible_by_seven = [];

// for ($i = 0; $i <= 100; $i++) {
//     if ($i % 7 === 0 && $i != 0) {
//         $divisible_by_seven[] = $i;
//     }
// }

// foreach ($divisible_by_seven as $number) {
//     echo $number . ' is divisible by 7<br>';
// }


//PART 2:

// $cast_crew = [];
// $cast_crew['cast'] = [];
// $cast_crew['cast'][] = 'John David Washington';
// $cast_crew['cast'][] = 'Robert Pattinson';
// $cast_crew['cast'][] = 'Elizabeth Debicki';
// $cast_crew['director'][] = 'Christopher Nolan';

// echo $cast_crew['cast'][1] . '<br>';

// // var_dump($cast_crew);

// foreach ($cast_crew['cast'] as $actor) {
//     echo $actor . '<br>';
// }

// foreach ($cast_crew as $value) {
//     foreach ($value as $castMember) {
//         echo "<p>{$castMember}</p>";
//     }
// }

$cast_crew = ['actors'=>[], 'directors'=>[]];
// $cast_crew['actors'][] = 'whatsup';

var_dump($cast_crew);

$people = [
    [
        'name' => 'John David Washington',
        'job' => 'actor'
    ],
    [
        'name' => 'Robert Pattinson',
        'job' => 'actor'
    ],
    [
        'name' => 'Christopher Nolan',
        'job' => 'director'
    ],
    [
        'name' => 'Steven Spielberg',
        'job' => 'director'
    ],
    [
        'name' => 'Michael Caine',
        'job' => 'actor'
    ]
];

foreach ($people as $person) {
    if ($person['job'] === 'actor') {
        $cast_crew['actors'][] = $person['name'];
    }
    if ($person['job'] === 'director') {
        $cast_crew['directors'][] = $person['name'];
    }
}
echo '<br>';

var_dump($cast_crew);

foreach ($cast_crew as $job_title => $people) {
    echo "<h2>The $job_title</h2>";
    // echo "<ol>";
    foreach ($people as $name => $person) {
        echo "<li>$person</li>";
    }
}

$default_values = ['title' => null, 'year' => null, 'plot' => null, 'duration' => null];

var_dump($default_values);

$movie = ['title' => 'Tenet', 'year' => 2020, 'rating' => 7.5, 'duration' => 150];

$movie = array_merge($default_values, $movie);

var_dump($movie);

$movies = [
    [
        'title' => 'Dunkerk',
        'year' => 2017,
        'pg' => 13,
        'favourite' => false
    ],
    [
        'title' => 'Tenet',
        'year' => 2020,
        'pg' => 13
    ],
    [
        'title' => 'Interstellar',
        'year' => 2014,
        'pg' => 13,
        'favourite' => false
    ],
    [
        'title' => 'Inception',
        'year' => 2010,
        'pg' => 13,
        'favourite' => true
    ],
    [
        'title' => 'The Prestige',
        'year' => 2006,
        'pg' => 13
    ],
    [
        'title' => 'Batman begins',
        'year' => 2005,
        'pg' => 12,
        'favourite' => true
    ],
    [
        'title' => 'The Dark Knight',
        'year' => 2008,
        'pg' => 12,
        'favourite' => true
    ],
    [
        'title' => 'The Dark Knight Rises',
        'year' => 2012,
        'pg' => 12,
        'favourite' => false
    ],
];

echo '<br>';

$favourite_movies = [];
foreach ($movies as $movie) {
    foreach ($movie as $favourite => $info) {
        if (isset($movie['favourite']) === true && $movie['favourite'] === true) {
        $favourite_movies[] = $movie;
        }
    }
    
}

var_dump($favourite_movies);