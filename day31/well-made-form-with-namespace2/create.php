<?php

require_once 'bootstrap.php';

$song = new Song;

//can do this to protect from hacking:
// function _($something)
// {
//     return htmlspecialchars($something);
// }



$errors = session()->get('errors', []);
$old_request_data = session()->get('request_data', []);

unset($_SESSION['errors']);
unset($_SESSION['request_data']);

// //take the value of the success message from session if true:
// $success_message = $_SESSION['success message'] ?? null;

// //delete the success message from the session == 'flashing'
// unset($_SESSION['success message']);

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Create song</h1>

    <?php if ($errors) : ?>

        <?php foreach ($errors as $error) : ?>

            <div class="error-message">
                <?= $error ?>
            </div>

        <?php endforeach; ?>

    <?php endif; ?>

    <form action="insert.php" method="post">
 
    <!-- display the form prefilled with entity data -->
 
    Name:<br>
    <input type="text" name="name" value="<?= htmlspecialchars((string) old('name', $song->name)) ?>"><br>
    <br>
 
    Author:<br>
    <input type="text" name="author" value="<?= htmlspecialchars((string) old('author', $song->author)) ?>"><br>
    <br>
 
    Length:<br>
    <input type="text" name="length" value="<?= htmlspecialchars((string) old('length', $song->length)) ?>"> seconds<br>
    <br>
 
    Album:<br>
    <input type="text" name="album" value="<?= htmlspecialchars((string) old('album', $song->album)) ?>"><br>
    <br>
 
    <button type="submit">Save</button>
    <a href="list.php">See the list</a>
</form>
</body>
</html>