(function($R)
{
    $R.add('plugin', 'kirby-imagemanager', {
        translations: {
    		en: {
    			"choose": "Choose"
    		}
        },
        init: function(app)
        {
            this.app = app;
            this.lang = app.lang;
            this.opts = app.opts;
            this.api = app.opts.kirbyApi
            this.endpoints = app.opts.kirbyEndpoints
        },
        // messages
        onmodal: {
            image: {
                open: function($modal, $form)
                {
                    if (!this.opts.imageQuery) return;
                    this._load($modal)
                }
            }
        },

		// private
		_load: function($modal)
		{
			var $body = $modal.getBody();

			this.$box = $R.dom('<div>');
			this.$box.attr('data-title', this.lang.get('choose'));
			this.$box.addClass('redactor-modal-tab');
			this.$box.hide();
			this.$box.css({
    			overflow: 'auto',
    			height: '300px',
    			'line-height': 1
			});

			$body.append(this.$box);

            this.api.get(this.endpoints + '/get-images')
            .then(files => {
                // if there are files to pick from
                if(files.length) {
                    this._parse(files)
                }
                // else: show an error dialog
                else {
                    // this.$store.dispatch('notification/error', 'The page has no '+ dialog)
                    console.log('no images');
                }
            })
            .catch((error) => {
                console.log(error);
                // this.$store.dispatch('notification/error', 'The files query does not seem to be correct')
            })
		},
		_parse: function(data)
		{
            for (var key in data)
            {
                var obj = data[key];
                if (typeof obj !== 'object') continue;
                var $img = $R.dom('<img>');
                var url = (obj.thumb) ? obj.thumb : obj.url;
                $img.attr('src', url);
                $img.attr('data-params', encodeURI(JSON.stringify(obj)));
                $img.css({
                    width: '25%',
                    height: 'auto',
                    margin: '0 4px 2px 0',
                    cursor: 'pointer'
                });

                $img.on('click', this._insert.bind(this));

				this.$box.append($img);
            }
		},
		_insert: function(e)
		{
    		e.preventDefault();

			var $el = $R.dom(e.target);
			var data = JSON.parse(decodeURI($el.attr('data-params')));

			this.app.api('module.image.insert', { image: data });
		}
    });
})(Redactor);