<?php

use Kirby\Http\Header;
use Kirby\Toolkit\Str;

Kirby::plugin('wearejust/extra-methods', [
    'siteMethods' => [
        'allSocials' => function () {
            $bp = site()->blueprint();

            if ( ! $bp->section('socials') ) return null;
            $socialFields = $bp->section('socials')->fields();

            $socialFields = array_filter($socialFields, function($v, $k) {
                return $k !== 'headline' && $this->$k()->isNotEmpty();
            }, ARRAY_FILTER_USE_BOTH);

            $socials = array_map( function($panelField) { 
                $fieldName = $panelField['name'];
                $field = $this->$fieldName();
                $field->label = $panelField['label'];
                return $field;
            }, $socialFields);

            return $socials;
        },
    ],
    'pageMethods' => [
        'theTitle' => function () {
            $alt = $this->alternate_title()->exists() ? $this->alternate_title() : '';
            return $alt != '' ? $alt : $this->title();
        },
    ]
]);