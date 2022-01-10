<?php

/**
 * DeployerPHP 6.8 is used to deploy the project. Please
 * use CI to deploy or composer globally
 * require the package.
 *
 * @see https://github.com/deployphp/deployer/releases/tag/v6.8
 */

namespace Deployer;

require 'recipe/common.php';

/**
 * Generate a deploy token on github. 
 * Navigate to the project -> settings -> repossitory -> deploy tokens
 */

set('git_username', 'XXX');
set('git_password', 'XXX');
set('git_repository', 'git.wearejust.com/XXX/XXX.git');

host('jakku.wearejust.com')
    ->user('XXX')
    ->port(22)
    ->identityFile('/ssh/id_rsa')
    ->addSshOption('UserKnownHostsFile', '/dev/null')
    ->addSshOption('StrictHostKeyChecking', 'no')
    ->forwardAgent()
    ->stage('staging')
    ->set('branch', 'staging')
    ->set('symfony_env', 'staging')
    ->set('deploy_path', '/home/XXX/domains/XXX.justnotfinished.com')
    ->set('bin/php', '/usr/local/php74/bin/php')
;

// host('server01.wearejust.com')
//     ->user('XXX')
//     ->port(22)
//     ->identityFile('/ssh/id_rsa')
//     ->addSshOption('UserKnownHostsFile', '/dev/null')
//     ->addSshOption('StrictHostKeyChecking', 'no')
//     ->forwardAgent()
//     ->stage('production')
//     ->set('branch', 'master')
//     ->set('deploy_path', '/home/XX/domains/XXX.com')
//     ->set('fpm_sock', '/usr/local/php-7.4/var/run/php-fpm/XXX.sock')
//     ->set('bin/php', '/home/XXX/bin/php')
// ;

set('bin/composer', '{{bin/php}} /usr/local/bin/composer');
set('keep_releases', 2);
set('repository', 'https://{{git_username}}:{{git_password}}@{{git_repository}}');

add('shared_files', ['.env', 'site/config/.license']);
add('shared_dirs', ['content', 'storage']);

task('deploy:build_assets', function () {
    runLocally('yarn install');
    runLocally('yarn build:production');
});

task('deploy:upload_assets', function () {
    upload('public/assets/build', '{{release_path}}/public/assets');
});

desc('Clear opcache');
task('deploy:clear-opache', function () {
    run('/usr/local/bin/cachetool opcache:status --fcgi={{fpm_sock}}');
    run('/usr/local/bin/cachetool opcache:reset --fcgi={{fpm_sock}}');
    run('/usr/local/bin/cachetool opcache:status --fcgi={{fpm_sock}}');
})->onStage('production');

task('deploy', [
    'deploy:info',
    'deploy:build_assets',
    'deploy:prepare',
    'deploy:release',
    'deploy:update_code',
    'deploy:upload_assets',
    'deploy:shared',
    'deploy:vendors',
    'deploy:symlink',
    'deploy:clear-opache',
    'cleanup',
])->desc('Deploy your project');
