define([
    'jquery'
    ,'backbone'
    , 'views/header'
    , 'views/menu'
    , 'views/aside'
    , 'views/tags'
    , 'routers/blog-router'
    , 'views/content'
    ], function ($, Backbone, HeaderView, MenuView, AsideView, TagsView, BlogRouter, ContentView) {

    var initialize,
        baseDomElement,
        globals;

        // @todo: initial bootstrapping data into service global object
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
            ],
            tags: ['hello', 'dog', 'awesome', 'script', 'raccoon', 'html', 'food', 'accordance']
        }

    // Here is will init all start modules for the app
    initialize = function() {

        // @todo: app service object & gobals
        Backbone.pubSub = _.extend({}, Backbone.Events);

        var APP = window.APP || {};

            APP.headerView = new HeaderView;
            APP.menuView = new MenuView;
            APP.contentView = new ContentView;
            APP.asideView = new AsideView;
            APP.tagsView = new TagsView;

            APP.blogRouter = new BlogRouter();
                Backbone.history.start();
    }

    return {
        initialize: initialize
    }

});