import * as he from 'he';

(function($R)
{
    $R.add('plugin', 'limiter', {
		modals: {
            // this is variable with modal HTML body
            'notify_modal': '<div>'
                + '<div class="">'
                    + '<h2 style="padding-bottom: 0.6em">Whooops</h2>'
                    + '<p>De tekst die je probeert te plakken heeft teveel karakters</p>'
                + '</div>'
            + '</div>'
        },
        init: function(app)
        {
            this.app = app;
            this.utils = app.utils;
            this.opts = app.opts;
            this.editor = app.editor;
            this.keycodes = app.keycodes;
        },
        // events
        onpasting: function(html)
        {
            if (!this.opts.limiter) return;

            var pasteText = this.utils.removeInvisibleChars(html).replace(/<[^>]+>/g, '');
			var pasteText_decoded = he.decode( pasteText );

            var text = this._getText(); // Text allready in the editor
            var len = pasteText_decoded.length + text.length;

			var sel_html = he.decode( this.app.selection.getHtml() );
			var sel_text = this.utils.removeInvisibleChars(sel_html).replace(/<[^>]+>/g, ''); 
			var sel_text_decoded = he.decode( sel_text ); 
			
			var sel_length = sel_text_decoded.length;

			// Open a modal if the lenght gets to long
			if( ( len - sel_length )  >= this.opts.limiter ) {
				this.open();
			}
			this.opts.input = !(( len - sel_length ) >= this.opts.limiter);
        },
		open: function()
        {
			console.log('open please')
			var options = {
				title: 'Whooops...', // the modal title
				name: 'notify_modal', // the modal variable in modals object
				commands: {
					cancel: { title: 'Sluiten' } 
				}
			};
		
			// open the modal with API
			this.app.api('module.modal.build', options);
        },
        // public
        start: function()
        {
			if (!this.opts.limiter) return;
            this._count();

            var $editor = this.editor.getElement();
            $editor.on('keydown.redactor-plugin-limiter', this._limit.bind(this));
		},
		stop: function()
		{
            var $editor = this.editor.getElement();
            $editor.off('.redactor-plugin-limiter');

            this.opts.input = true;
		},

		// private
		_limit: function(e)
		{
    		var key = e.which;
			var ctrl = e.ctrlKey || e.metaKey;
			var arrows = [37, 38, 39, 40];

			if (key === this.keycodes.BACKSPACE
			   	|| key === this.keycodes.DELETE
			    || key === this.keycodes.ESC
			    || key === this.keycodes.SHIFT
			    || (ctrl && key === 65)
			    || (ctrl && key === 88)
			    || (ctrl && key === 82)
			    || (ctrl && key === 116)
			    || (arrows.indexOf(key) !== -1)
			)
			{
				return;
			}

            this._count(e);
		},
		_count: function(e)
		{
            var text = this._getText();
			var count = text.length;
			if (count >= this.opts.limiter)
			{
                if (e) e.preventDefault();
                this.opts.input = false;
				return false;
			}
			else
			{
    			this.opts.input = true;
			}
		},
		_getText: function()
		{
            var $editor = this.editor.getElement();
			var text = $editor.text();

			return this.utils.removeInvisibleChars(text);
		}
    });
})(Redactor);