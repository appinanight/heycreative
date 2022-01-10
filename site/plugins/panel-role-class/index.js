(function (panel) {

    function watchUser(app) {
        app.$store.watch(
            state => {
                if (state.user.current) {
                    return state.user.current;
                }
            },
            (newUser, oldUser) => {
                if( newUser ) {
                    app.$el.classList.add(  'role-' + newUser.role.name.toLowerCase() );
                }
            }
        )
    }

    panel.plugin("pakt-digital/panel-role-class", {
        created( app ) {
            watchUser(app);   
        }
    });

}(panel));
