<?php

require_once 'bootstrap.php';

$songs = select(0, 0, 'Song');

$success_message = session()->get('success_message');

//take the value of the success message from session if true:
// $success_message = $_SESSION['success message'] ?? null;

//delete the success message from the session == 'flashing'
// unset($_SESSION['success message']);

?>

    <?php if ($success_message) : ?>
    
        <div class="success-message"><?= $success_message ?></div>
    
    <?php endif; ?>

<ul>
    <?php foreach ($songs as $song) : ?>
        <li>
            <?= $song->name ?>
 
            <a href="edit.php?id=<?= $song->id ?>">edit</a>
        </li>
    <?php endforeach; ?>

    <a href="create.php">Create new</a>
</ul>