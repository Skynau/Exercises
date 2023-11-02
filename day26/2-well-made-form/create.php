<?php

require_once 'DBBlackbox.php';
require_once 'Song.php';
require_once 'Session.php';


$song = new Song;

$errors = $_SESSION['errors'];
unset($_SESSION['errors']);
$success_message = $_SESSION['success_message'] ?? null;
unset($_SESSION['success_message']);

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<h1>Create a song:</h1>

<a href="list.php">See the list first?</a>

<?php if ($errors) : ?>
    <?php foreach ($errors as $key => $error) : ?>
        <div class="success-message"><?= $errors[$key] ?></div>
    <?php endforeach; ?>
<?php endif; ?>

<body>
    <form action="insert.php" method="post">

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

    </form>
</body>

</html>