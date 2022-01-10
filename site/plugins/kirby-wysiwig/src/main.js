import Wysiwyg from './components/field/p-wysiwyg.vue';
 
panel.plugin('sietseveenman/p-wysiwyg', {
    fields: {
        'p-wysiwyg': Wysiwyg,
    },
    components: {
        'k-p-wysiwyg-field-preview': {
          props: {
            value: String,
            column: Object,
            field: Object
          },
          computed: {
            stripped() {
                let stripped = this.value.replace(/<[^>]+>/g, '');
                return stripped.length > 24 
                    ? stripped.substring(0,24) + '...'
                    : stripped;
            }
          },
          template: '<p style="padding: 0 1em;">{{stripped}}</p>'
        }
      }
});
