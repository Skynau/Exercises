<?php

function element ($element, $innerhtml = '', $attributes = '')
{
    return "<$element " . $attributes . ">" . $innerhtml . "</$element>";
}

echo element('div', 'Hello World', 'class="whatsup"');
// var_dump(element('div', 'Hello World', "class='indemand'"));