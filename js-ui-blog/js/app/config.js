requirejs.config({

    //baseUrl: '',

    //deps: ['main'], now using require('blog-app') instead of deps

    paths: {
        'jquery': '../3p/jquery',
        'underscore': '../3p/underscore',
        'backbone': '../3p/backbone',
        'text':'../3p/rjs-text',
        'tinyMCE': '../3p/tinymce/tinymce.min'
    },

    shim: {

        // no need now that the Backbone is AMD version _, $ is included into Backbone
        // if no define Backbone, please define(['jquery' or 'underscore']) into the module

        //underscore: {
            //exports: '_'
        //},

        // jquery: {
        //     exports: '$'
        // },

        // backbone: {
        //     deps: ['jquery', 'underscore'],
        //     exports: 'Backbone'
        // },

        tinyMCE: {
            exports: 'tinyMCE'
        }

        // tinyMCE: {
        //     exports: 'tinyMCE',
        //     init: function () {
        //         this.tinyMCE.DOM.events.domLoaded = true;
        //         return this.tinyMCE;
        //     }
        // }
    }

});


require([
    'blog-app'
    ], function(blogApp) {

    blogApp.initialize();
})
