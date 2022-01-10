<?php

use Kirby\Toolkit\A;

$options = require kirby()->root('kirby') . '/config/fields/textarea.php';

Kirby::plugin('sietseveenman/p-wysiwyg', [
  'options' => array(
    'buttons'    => ['html', 'format', 'bold', 'italic', 'deleted', 'lists', 'image', 'file', 'link', 'line', 'redo', 'undo', 'underline', 'ol', 'ul', 'indent', 'outdent', 'sup', 'sub', 'video'],
    'formatting' => ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'pre'],
    'query'      => [
      'pagelink' => null,
      'images'   => 'page.images',
      'files'    => 'page.files.filterBy("type", "!=", "image")',
    ]
  ),
  'fields' => [
    'p-wysiwyg' => [
      'props' => [
        'pasteInlineTags' => function ( $pasteInlineTags = [] )  {
          return $pasteInlineTags;
        },
        'pasteBlockTags' => function ( $pasteBlockTags = ['p'] )  {
          return $pasteBlockTags;
        },
        'limit' => function ( $limit = false ) {
          return $limit;
        },
        'lang' => function ( ) {
          return kirby()->user()->language();
        },
        // setting default buttons
        'buttons' => function ( $btns = [ 'redo', 'undo', 'format', 'bold', 'italic', 'lists', 'link' ] ) {
          return $btns;
        },
        // setting default formatting
        'formatting' => function ( $formatting = ['p', 'h2', 'h3'] ) {
          return $formatting;
        },
        'query' => function($query = null) {
        	$queryOptions = option('community.markdown-field.query');
        	$queryOptions = $query ? A::merge($queryOptions, $query) : $queryOptions;
        	return $queryOptions;
        }
      ],
      'computed' => [
        'pageId' => function () {
          return $this->model()->id();
        },
        'pageUid' => function () {
          return $this->model()->uid();
        },
        'encodedPageId' => function () {
          return str_replace('/', '+', $this->model()->id());
        },
      ],
      'methods' => [
        'pageResponse' => function($page) {
          $thumb = ['width'  => 100, 'height' => 100];
          $image = $page->panelImage($this->image, $thumb);
          $model = $this->model();
          return [
              'name'        => $page->toString('{{ page.title }}'),
              // 'url'         => '/' . $page->uri(),
              'url'         => $page->url(),
              'id'          => $page->id(),
              'info'        => false,
              'image'       => $image,
              'hasChildren' => $page->hasChildren(),
          ];
        },
        'fileResponse' => function($file) {
          $thumb = ['width'  => 100, 'height' => 100];
          $image = $file->panelImage($this->image, $thumb);
          $model = $this->model();
          $uuid  = $file->parent() === $model ? $file->filename() : $file->id();
          return [
              'filename' => $file->filename(),
              'text'     => $file->toString('{{ file.filename }}'),
              'link'     => $file->panelUrl(true),
              'id'       => $file->id(),
              'uuid'     => $uuid,
              // 'thumb'    => $image->crop(100),
              'url'      => $file->url(),
              'info'     => $file->toString(false),
              'image'    => $image,
              'type'     => $file->type(),
              // 'test'  => $image->srcset([300, 800, 1024]),
          ];
        },
      ],
      'api' => function() {
        return [[
            'pattern' => 'get-pages',
            'action' => function () {
              $field = $this->field();
              $query = $field->query()['pagelink'];
              if ($query) {
                  $pages = $field->model()->query($query, 'Kirby\Cms\Pages');
                  $model = null;
              }
              else {
                if (!$parent = $this->site()->find($this->requestQuery('parent'))) {
                    $parent = $this->site();
                }
                $pages = $parent->children();
                $model = [
                    'id'    => $parent->id() == '' ? null : $parent->id(),
                    'title' => $parent->title()->value()
                ];
              }
              $children = [];
              foreach ($pages as $index => $page) {
                  if ($page->isReadable() === true) {
                      $children[] = $field->pageResponse($page);
                  }
              }
              return [
                'field' => $field,
                'model' => $model,
                'pages' => $children
              ];
            }
          ],
          [
            'pattern' => 'get-images',
            'method'  => 'GET',
            'action'  => function () {
                $field = $this->field();
                $query = $field->query()['images'];
                $files = $field->model()->query($query, 'Kirby\Cms\Files');
                $files = $files ?? $field->model()->query('site.images', 'Kirby\Cms\Files');

                $data  = [];
                foreach ($files as $index => $file) {
                    $data[] = $field->fileResponse($file);
                }

                return $data;
            }
          ]
        ];
      }
    ]
  ] 
]);
