<?php

require_once 'DB.php';
require_once 'DB_functions.php';
require_once 'Country.php';
require_once 'Region.php';

DB::connect(
    'localhost',
    'world',
    'root',
    ''
);

//  $query = 'SELECT * 
//     FROM `cities`
//     ORDER BY `population` DESC
//     LIMIT 20, 20';
//     $results = DB::select($query);

//     var_dump($results);

// function get_cities($page_nr)
// {
//     $offset = ($page_nr - 1) * 20;
//     $query = "SELECT * 
//     FROM `cities`
//     ORDER BY `population` DESC
//     LIMIT $offset, 20";
//     $results = DB::select($query);
//     return $results;
// };

// $results = get_cities(1);

// $query_insert = "INSERT INTO `regions2` (`name`, `slug`) VALUES ('North America', 'north-america'), ('Central America', 'central-america'),
// ('South America', 'south-america')";

// DB::insert($query_insert);

// $central_africa = new Region;
// $central_africa->name = 'Central Africa';
// $central_africa->slug = 'central-africa';
// $central_africa->insert();

class Dog
{
    protected $name = 'Ben';

    public function __toString()
    {
        return $this->name;
    }
}

$new_dog = new Dog;
echo $new_dog;



$update_query = "DELETE FROM `regions2` WHERE `slug` LIKE '%africa%' LIMIT 3";

DB::delete($update_query);

$query = "SELECT *
FROM `regions2`";

$results = DB::select($query);

?>

//
<!DOCTYPE html>
// <html lang="en">
//

<head>
    //
    <meta charset="UTF-8">
    //
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    // <title>Document</title>
    //
</head>
//

<body>
    // <ul>

        // <?php foreach ($results as $region) : ?>

            // <li>
                // <?= $region->name ?>
                <br>
                <!-- <?= $country->population ?>
                <br>
                <?= $country->gnp ?> -->
                //
            </li>
            // <?php endforeach; ?>
        // </ul>
    // </body>
//

</html>