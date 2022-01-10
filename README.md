# PAKT Kirby 3 boilerplate

## How to install ?

Easy, just run 'composer install' and 'yarn install'. 
After installing run 'yarn fix-dumper' and 'yarn watch' so you can start development.

If you wan't to see something on the frontend. Start by adding a /home folder to the /content folder of go to /panel to register a user and create the homepage from the panel.

## Font preload

Get the manifest key from the manifest file and use as argument in function.
See master.twig


## Languages

By default this boilerplate is set up for a multilingual website (nl and en). To disable this open up public/index.php and remove (or comment out) the languages you don't need.
Need to support more languages? Just add them to the array of languages. Don't forget to add a translation .yaml file inside the languages folder!

### translation language variables
Add translation variables to the language .yaml files inside site/languages/
Use these inside your twig templates {{ 'example.title' | translate }}

## Buy a license

You can purchase your Kirby license at
<https://getkirby.com/buy>

A Kirby license is valid for a single domain. You can find
Kirby's license agreement here: <https://getkirby.com/license>