<?php

// $site_share_img_1200 = $site->site_share_square()->toFile() 
//     ? $site->site_share_square()->toFile()->resize(1200, null, 90)->url() 
//     : ''; 

// $site_share_img_630 = $site->site_share_landscape()->toFile() 
//     ? $site->site_share_landscape()->toFile()->resize(1200, null, 90)->url() 
//     : '';

// if ( $page->isHomePage() ) {
//     $meta_title = $site->site_title() . ' | ' . $site->site_payoff();
//     $meta_description = $site->site_description(); 
// }
// else {
//     $meta_title = $page->title() . ' | ' .  $site->site_title();
//     $meta_description = $page->seo_description() && $page->seo_description()->isNotEmpty() 
//         ? $page->seo_description()
//         : $page->intro() != ''
//             ? strip_tags($page->intro())
//             : $site->site_description();
// }
return [
    // 'title' => $meta_title,
    // 'meta' => [
    //     'apple-mobile-web-app-title' => $meta_title,
    //     'description' => $meta_description,
    //     'robots' => 'index,follow'
    // ],
    // 'link' => [
    //     'canonical' => $page->url()
    // ],
    // 'og' => [
    //     'title' => $meta_title,
    //     'description' => $meta_description,
    //     'type' => 'website',
    //     'site_name' => $site->site_title(),
    //     'url' => $page->url(),
    //     'image' => $site_share_img_1200,
    // ],
    // 'twitter' => [
    //     'card' => 'summary',
    //     'title' => $meta_title,
    //     'image' => $site_share_img_630,
    // ]
];
