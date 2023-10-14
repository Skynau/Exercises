<?php

function convret_weight($value, $units = 'kg') 
    {
    if ($units === 'kg' || $units === '') {
        return $value * (2.20462262);
    }
    return $value * (1/2.20462262);
    }

echo convret_weight(45, 'poop');