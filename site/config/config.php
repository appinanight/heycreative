<?php

use Kirby\Toolkit\Str;
use Kirby\Toolkit\Url;
use Kirby\Toolkit\F;

return [
    'debug' => $_ENV['KIRBY_DEBUG'],

    // Disable language detect and set a custom default locale if you need to
    'languages.detect' => true,
    // 'locale' => 'nl_NL.UTF-8',

    'panel' => [
        'css' => 'assets/panel/panel.css'
    ],

    'routes'=> require 'routes.php',
    'hooks' => require 'hooks.php',

    'date.handler'  => 'strftime',

    'amteich.twig.env.functions' => [
        '*manifest_css' => function ($file) { return Manifest::css($file); },
        '*manifest_js' => function ($file, $options = null) { return Manifest::js($file, $options); },
        'asset_manifest' => function ($file) { return Manifest::url($file); },

        'dd' => function ($var) { return dd($var); },
        'dump' => function ($var) { return dump($var); },
        'is_production_environment' => function () { return $_ENV['APP_ENV'] === 'prod'; },
        'locale' => function () { return (string) kirby()->language(); },
        'mix' => function($file) { return mix($file); },
        'site' => function () { return site(); },
        'page' => function () { return page(); },
    ],

    'amteich.twig.env.filters' => [
        // $file must be \Kirby\Cms\File or \Kirby\Cms\FileVersion
        'webp' => function ($file) {
            $input = $file->url();
            $extension = strtolower(pathinfo($input, PATHINFO_EXTENSION));
            $originalFile = kirby()->root() . parse_url($input, PHP_URL_PATH);

            $newFile = pathinfo($originalFile, PATHINFO_DIRNAME) . '/' . pathinfo($originalFile, PATHINFO_FILENAME) . '.webp';
            $newUri = str_replace(kirby()->root(), '', $newFile);

            if (file_exists($newFile)) {
                return $newUri;
            }

            switch ($extension) {
                case 'jpeg':
                case 'jpg':
                    $image = imagecreatefromjpeg($originalFile);
                    break;
                case 'png':
                    $image = imagecreatefrompng($originalFile);
                    imagepalettetotruecolor($image);
                    imagealphablending($image, true);
                    imagesavealpha($image, true);
                    break;
                case 'gif':
                    $image = imagecreatefromgif($originalFile);
                    break;
                default:
                    return $input;
            }

            $result = imagewebp($image, $newFile, 90);
            if (! $result) {
                return $input;
            }

            imagedestroy($image);

            return $newUri;
        },
        'translate' => function ($key, array $params = []) {
            return translate($key, $params);
        },
        'strftime' => function ($date, $format) {
            $date = new \DateTime($date);
            return strftime($format, $date->getTimestamp());
        },
        'force_link' => function ($link) {
            if (!preg_match("/^http[s]*:\/\/[\w]+/i", $link) && $link[0] !== '/') {
                $link = 'http://' . $link;
            }
            return $link;
        },
        'sluggify' => function ($string) {
            return Str::slug($string);
        },
        'domain' => function ($string) {
            if( Str::isURL($string) ) {
                $parsed = parse_url( $string );
                $string = $parsed['host'].$parsed['path'];
            }
            return $string;
        },
        'extractYoutubeId' => function($url) {
            preg_match('%(?:youtube(?:-nocookie)?\.com/(?:[^/]+/.+/|(?:v|e(?:mbed)?)/|.*[?&]v=)|youtu\.be/)([^"&?/ ]{11})%i', $url, $match);
            return $match[1];
        },
        'readableDate' => function ($date) {
            $today = new Datetime(date('Y-m-d'));
            $days = [
                0 => 'vandaag',
                1 => 'één dag geleden',
                2 => 'twee dagen geleden',
                3 => 'drie dagen geleden',
                4 => 'vier dagen geleden',
                5 => 'vijf dagen geleden',
                6 => 'zes dagen geleden',
                7 => 'zeven dagen geleden'
            ];
            $endDate = new Datetime($date->toDate('Y-m-d'));
            $diff = $endDate->diff($today);
            return $diff->days <= 7 ? $days[$diff->days] : strftime('%e %B %Y', $date->toDate());
        },
    ],

    /* 
        Set up meta tags inside config/meta-tags/*.php 
        See https://github.com/pedroborges/kirby-meta-tags
    */
    'pedroborges.meta-tags.default' => function ($page, $site) {
        return require_once 'meta-tags/default.php';
    },
    'pedroborges.meta-tags.templates' => function ($page, $site) {
        return require_once 'meta-tags/templates.php';
    },
];
