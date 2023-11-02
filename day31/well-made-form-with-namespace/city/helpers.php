<?php


function session()
{
    return DanielSlezak\Tools\Session::instance();
}

function old($key, $default = null)
{
    return session()->old($key, $default);
}