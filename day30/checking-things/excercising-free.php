<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        $sentense = "Its nice out there";
        $sentense[10] = "G";
        echo substr($sentense, 4, 4);
    ?>

    <form method="post" action="output.php">
        Color: <input type="text" name="color" value="">
        Noun: <input type="text" name="noun" value="">
        <input type="Submit">
    </form>
</body>
</html>

