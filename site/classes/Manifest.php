<?php

class Manifest
{
    private static $PREFIX = '/assets/build';
    private static $PARSED;
    private static $IS_IN_HMR_MODE;

    private static function generate($file)
    {
        if ($parsed = self::$PARSED) {
            $file = ltrim($file, '/');

            if (self::$IS_IN_HMR_MODE) {
                return self::$IS_IN_HMR_MODE . $parsed[$file];
            }

            return self::$PREFIX . $parsed[$file];
        }

        $path = kirby()->roots()->index() . self::$PREFIX . '/mix-manifest.json';

        if (! file_exists($path)) {
            throw new \LogicException('Manifest file is missing');
        }

        $res = file_get_contents($path);
        $mixHmrFile = kirby()->root('index') . self::$PREFIX . '/hot';

        $json = json_decode($res, true);

        foreach($json as $key => $value) {
            $new = ltrim(str_replace(self::$PREFIX, '', $key), '/');
            unset($json[$key]);
            $json[$new] = $value;
        }

        self::$PARSED = $json;
        self::$IS_IN_HMR_MODE = file_exists($mixHmrFile) 
            ? preg_replace('/\s+/', '', file_get_contents($mixHmrFile))
            : false
        ;

        return self::generate($file);
    }

    public static function css($file)
    {
        return css([self::generate($file), '@auto']);
    }

    public static function js($file, $options = null)
    {
        $defaultOptions = [
            'dev' => false,
            'defer' => true,
        ];

        $options = array_merge($defaultOptions, (array) $options);

        if ($options['dev'] && ! $_ENV['KIRBY_DEBUG']) {
            return '';
        }

        return js([self::generate($file), '@auto'], $options);
    }
    
    public static function url($file) 
    {
        return self::generate($file);
    }
}
