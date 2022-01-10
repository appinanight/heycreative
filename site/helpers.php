<?php

use Kirby\Toolkit\I18n;

function translate($key, array $params = [])
{
    try {
        return I18n::template($key, $key, $params);
    }catch(\Exception $e) {
        return 'ERROR';
    }
}

function addRandomPrefix($name, $length = 10)
{
    $prefix = bin2hex(random_bytes(intval($length / 2)));

    return "{$prefix}_{$name}";
}