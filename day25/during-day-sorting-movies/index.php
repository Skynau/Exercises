<?php

include './data/data.php';
require_once './functions/function.php';

$orderby = $_GET['orderby'] ?? 'title';
$orderway = $_GET['orderway'] ?? 'asc';


// $sorted_by_title_alphabetically = sortMovies($movies, 'title', 'asc');
// $sorted_by_rating_from_best = sortMovies($movies, 'rating', 'desc');
// $sorted_from_oldest = sortMovies($movies, 'year');

$sorted_movies = sortMovies($movies, $orderby, $orderway)


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <a href="?<?php http_build_query(
            [
                'argument1' => '$movies',
                'argument2' => 'rating',
                'argument3' => 'asc'
            ]
        )?>">Sort by title</a>
    <a href="?<?php http_build_query(
            [
                'argument1' => '$movies',
                'argument2' => 'rating',
                'argument3' => 'desc'
            ]
        )?>">Movies sorted by rating descending</a>


    <a href=""></a>
    
    

    <ol>
        <?php foreach ($sorted_movies as $movie) : ?>
            <li>
                <?=$movie['title']?> <?=$movie['rating']?> <?=$movie['year']?>
            </li>
        <?php endforeach; ?>
    </ol>

</body>
</html>
