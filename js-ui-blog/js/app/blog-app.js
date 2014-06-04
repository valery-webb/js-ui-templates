define([
    'jquery'
    , 'views/header'
    , 'views/menu'
    ], function ($, HeaderView, MenuView) {

    var initialize,
        baseDomElement;

        // initial bootstrapping data
        window.blogBootstrap = {
            menuItems: [
                'javascript',
                'css',
                'latest',
                'html',
                'design'
            ],
            asideData: [{
                title: 'about',
                content: 'Lorem Ipsum is simply dummy text of the printing and\
                    typesetting industry. Lorem Ipsum has been the industrys\
                    standard dummy text ever since the 1500s, when an unknown\
                    printer took a galley of type and scrambled'
                },
                {
                title: 'about',
                content: 'Lorem Ipsum is simply dummy text of the printing and\
                    typesetting industry. Lorem Ipsum has been the industrys\
                    standard dummy text ever since the 1500s, when an unknown\
                    printer took a galley of type and scrambled'
                }
            ],
            serviceBtns: [
                {btnType: 'help', sign: '?'},
                {btnType: 'info', sign: '!'},
                {btnType: 'edit', sign: 'e'}
            ]
        }

    // Here is will init all start modules for the app
    initialize = function() {

        var header = new HeaderView;
        var menu = new MenuView;

        // route initialize & history start
    }

    return {
        initialize: initialize
    }

});