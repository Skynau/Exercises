<?php

$time_served = 0;

// while ($time_served <= 10) {
//     echo 'The prisoner has served ' . $time_served . ' years.<br>';
//     $time_served++;
// }

// do {
//     echo 'The prisoner has served ' . $time_served . ' years.<br>';
//     $time_served++;
// } while ($time_served <= 10);

for ($i = 10; $i >= 1; $i--) { 
    echo 'The prisoner has ' . $i . ' years left.';
    if ($i > 5) {
        continue;
    }
    echo ' Going to a parole hearing...';
    if ($i === 2 ) {
        echo 'Parolled';
        break;
    }
}