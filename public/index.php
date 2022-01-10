<?php

use Kirby\Data\Yaml;
use Kirby\Toolkit\F;
use Symfony\Component\Dotenv\Dotenv;

require __DIR__ . '/../vendor/autoload.php';

// The check is to ensure we don't use .env in production
if (!isset($_SERVER['APP_ENV'])) {
    if (!class_exists(Dotenv::class)) {
        throw new \RuntimeException('APP_ENV environment variable is not defined. You need to define environment variables for configuration to load variables from a .env file.');
    }
    (new Dotenv())->overload(__DIR__.'/../.env');
}

$currentExtension = pathinfo($_SERVER['REQUEST_URI'], PATHINFO_EXTENSION);
$smallRequestUrl = mb_strtolower($_SERVER['REQUEST_URI']);
if ($_SERVER['REQUEST_URI'] !== $smallRequestUrl && ! $currentExtension) {
    header("HTTP/1.1 301 Moved Permanently");
    header("Location: {$smallRequestUrl}");
    exit();
}

$_ENV['KIRBY_DEBUG'] = 'true' === $_ENV['KIRBY_DEBUG'];

if ($_ENV['APP_ENV'] === 'dev') {
    // Mock Apache server on development for Symfony serve
    $_SERVER['SERVER_SOFTWARE'] = 'apache';
}

$kirby = new Kirby([
    'roots' => [
        'index'    => __DIR__,
        'base'     => $base  = dirname(__DIR__),
        'content'  => $base . '/content/',
        'site'     => $base . '/site',
        'storage'  => $base . '/storage/sites/',
        'accounts' => $base . '/storage/default/accounts',
        'cache'    => $base . '/storage/default/cache',
        'sessions' => $base . '/storage/default/sessions',
    ],

    // 'languages' => [
    //     'nl' => [
    //         'code' => 'nl',
    //         'default' => true,
    //         'direction' => 'ltr',
    //         'locale' =>  'nl_NL',
    //         'name' =>  'Nederlands',
    //         'translations' => Yaml::decode(F::read(kirby()->root('languages').'/nl.yaml'))
    //     ],
    //     'en' => [
    //         'code' => 'en',
    //         'direction' => 'ltr',
    //         'locale' =>  'en_EN',
    //         'name' =>  'English',
    //         'translations' => Yaml::decode(F::read(kirby()->root('languages').'/en.yaml'))
    //     ]
    // ]
]);

echo $kirby->render();
