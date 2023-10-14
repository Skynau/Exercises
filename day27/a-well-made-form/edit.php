<?php

require_once 'bootstrap.php';

$id = $_GET['id'];

$song = find( $id, 'Song' );

// session();

//take the value of the success message from session if true:
// $success_message = $_SESSION['success message'] ?? null;
$success_message = session()->get('success message', null);

//delete the success message from the session == 'flashing'
unset($_SESSION['success message']);

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Edit a song</h1>

    <?php if ($success_message) : ?>
    
        <div class="success-message"><?= $success_message ?></div>
    
    <?php endif; ?>

    <form action="update.php?id=<?= $id ?>" method="post">
 
    <!-- display the form prefilled with entity data -->
 
    Name:<br>
    <input type="text" name="name" value="<?= htmlspecialchars((string)$song->name) ?>"><br>
    <br>
 
    Author:<br>
    <input type="text" name="author" value="<?= htmlspecialchars((string)$song->author) ?>"><br>
    <br>
 
    Length:<br>
    <input type="number" name="length" value="<?= htmlspecialchars((string)$song->length) ?>"> seconds<br>
    <br>
 
    Album:<br>
    <input type="text" name="album" value="<?= htmlspecialchars((string)$song->album) ?>"><br>
    <br>
 
    <button type="submit">Save</button>
 
    <a href="list.php">See the list</a>
</form>
</body>
</html>