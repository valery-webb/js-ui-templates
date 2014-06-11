define([
    'backbone'
    //,'globals'
    ],

    function (Backbone) {

    var BlogRouter = Backbone.Router.extend({

        routes: {
            '':            'default',
            'javascript':  'javascript',
            'css':         'css',
            'latest':      'latest',
            'html':        'html',
            'design':      'design'
        },
        'default': function() {
            Backbone.pubSub.trigger('page:changed', {pageName: 'latestPage'})
        },
        javascript: function() {
            Backbone.pubSub.trigger('page:changed', {pageName: 'JSPage'})
        },
        css: function() {
            Backbone.pubSub.trigger('page:changed', {pageName: 'cssPage'})
        },
        latest: function() {
            Backbone.pubSub.trigger('page:changed', {pageName: 'latestPage'})
        },
        html: function() {
            Backbone.pubSub.trigger('page:changed', {pageName: 'htmlPage'})
        },
        design: function() {
            Backbone.pubSub.trigger('page:changed', {pageName: 'designPage'})
        }

    });

    return BlogRouter;
});
