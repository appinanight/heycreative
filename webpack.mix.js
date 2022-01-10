let StylelintPlugin = require('stylelint-webpack-plugin')
let mix = require('laravel-mix')

mix.options({ 
    fileLoaderDirs: { fonts: 'assets/build/fonts' }
})

mix.webpackConfig({
    plugins: [
        new StylelintPlugin({
            files: './src/scss/**/*.scss',
            configFile: './.stylelintrc',
            fix: true
        })
    ]
})

mix.browserSync({
    proxy: process.env.MIX_PROXY,
    browser: 'google chrome',
    files: [
        {
            match: [
                "site/templates/**/*.twig",
                "site/snippets/**/*.twig"
            ],
        }
    ]
})

mix
    // Beter gebruik je geen JQuery...
    // .autoload({
    //      jquery: ['$', 'window.jQuery']
    //  })
    .js('src/js/app.js','app.js')
    .sass('src/scss/main.scss','main.css')
    .sourceMaps()
    .copyDirectory('src/scss/fonts', 'public/assets/build/fonts')
    .copy('node_modules/@khanacademy/tota11y/dist/tota11y.min.js', 'public/assets/build/tota11y.js')
    .version(['public/assets/build/fonts/**'])
    .setPublicPath('public/assets/build')
;

