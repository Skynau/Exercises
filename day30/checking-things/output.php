<?php
    if ($_SERVER["REQUEST_METHOD"] == 'POST') 
    {
        $color = $_POST['color'];
        $noun = $_POST['noun'];
        echo "color $color with ";
        echo $noun;
    } else {
        header("Location: excercising-free.php");
    }
    
?>