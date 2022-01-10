<template>
    <k-field :input="uid" v-bind="$props" class="k-p-wysiwyg-field">
        <textarea ref="editor" id="p-wysiwyg__editor" class="p-wysiwyg__editor"></textarea>
        <k-input class="p-wysiwyg__output" ref="input" :id="_uid" v-bind="$props" type="text" theme="field"/>
    </k-field>
</template>

<script>
import '../../lib/redactor/redactor.js';
import '../../lib/redactor/_plugins/video/video.js';
import '../../lib/redactor/_plugins/alignment/alignment.js';
import '../../lib/custom-plugins/pakt-limiter.js';
import '../../lib/redactor/_plugins/counter/counter.js';
import '../../lib/redactor/_plugins/definedlinks/definedlinks.js';
import '../../lib/custom-plugins/kirby-imagemanager.js';

import '../../lib/redactor/_langs/nl.js';
import '../../lib/redactor/_langs/de.js';

export default {
    data () {
        return {
            id: '',
            isLoaded: false,
            redactorInstance: Object,
        }
    },
    extends: 'k-field',
    props: {
        value: String,
        formatting: [Boolean, Array],
        pasteInlineTags: [ Array ],
        pasteBlockTags: [ Array ],
        buttons: [Boolean, Array],
        size: String,
        query: [Boolean, Array],
        endpoints: Object,
        pageId: String,
        pageUid: String,
        encodedPageId: String,
        limit: [Boolean, Number],
        lang: String
    },
    computed: { 
        styles() {
            let sortedFormatting = Object.values(this.formatting).map(format => {
                return format;
            });
            return sortedFormatting;
        },
    },

    methods: {
        
        imageUpload(formData, files, event){
            consol.log('image upload');
            consol.log(formData, files, event);
        },
        loadRedactor(query, pages, images){

            const sizes = {
                'small' : 160, 
                'medium': 240, 
                'large' : 460, 
            }
            let mySize = sizes[this.size] ? sizes[this.size] : sizes.small;
            let plugins = [
                'limiter',
                'counter',
                'definedlinks', 
                'kirby-imagemanager', 
            ];
            if (this.buttons && this.buttons.indexOf('video') !== -1) {
                plugins.push('video');
            }
            if (this.buttons && this.buttons.indexOf('alignment') !== -1) {
                plugins.push('alignment');
            }
            let self = this;
            $R(this.$refs.editor, {
                lang: self.lang,

                pasteImages: false,
                pasteInlineTags: self.pasteInlineTags,
                pasteBlockTags: self.pasteBlockTags,

                kirbyApi: self.$api,
                kirbyEndpoints: self.endpoints.field,

                plugins: plugins,
                minHeight: mySize+'px',

                linkNewTab: true,

                buttons: self.buttons,
                formatting: self.styles,

                definedlinks: pages ? pages : '',

                limiter: self.limit,
                
                imageUpload: function(formData, files, event){
                    self.$api.post('pages/' + self._uid + '/files')
                    .then(files => {
                    })
                    .catch((error) => {
                        // this.$store.dispatch('notification/error', 'The files query does not seem to be correct')
                    })
                    // ... your process for uploading an image ...
                    //  in the end, you must return JSON or a string with the image URL
                    // return json; or return '/images/my-image.jpg';
                },
                imageQuery: self.query.images,

                callbacks: {
                    started: function(){
                        self.redactorInstance = this;
                        if( self.value ){ 
                            this.source.setCode(self.value); 
                        }
                    },
                    changed: function( html ) {
                        self.isLoaded = true;
                        self.value = html;
                        self.$emit('input', self.value);
                    },
                    image: {
                        inserted: function(img){
                        }
                    }
                }
            });
        },
        checkQuery(hasQuery){
            let self = this;
            if (hasQuery) {
                this.$api.get(this.endpoints.field + '/get-pages')
                    .then(data => {
                        self.loadRedactor(hasQuery, data.pages);
                    })
                    .catch((error) => {
                        self.$store.dispatch('notification/error', error);
                });
            }else{
                self.loadRedactor(hasQuery);
            }
        }
    },
    updateRedactorSource (val = '', valFrom = false ) {

    },
    watch: {
        value: function (newVal, oldVal) {
            if ( !this.isLoaded ) {
                this.redactorInstance.source.setCode( newVal );
            }
        }
    },
    created () {
        this.id = this._uid
    },
    mounted () {
        this.checkQuery(this.query.pagelink);
    },

};
</script>

<style lang="scss">
    @import "../../lib/redactor/redactor.css";
    // .p-wysiwyg__editor will get replaced by Redactor
    .p-wysiwyg__editor {
        height: 0;
        padding: 0;
        margin: 0;
        opacity: 0;
        overflow: hidden;
    }
    .p-wysiwyg__output {
        height: 0;
        overflow: hidden;
        opacity: 0;
        border: 0px !important;
        position:absolute;
    }
</style>
