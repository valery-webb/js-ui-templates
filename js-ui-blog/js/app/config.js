requirejs.config({

    //baseUrl: '',

    deps: ['main'],

    paths: {
        'jquery': '../3p/jquery',
        'underscore': '../3p/underscore',
        'backbone': '../3p/backbone',
        'text':'../3p/rjs-text'
    },

    shim: {

        underscore: {
            exports: '_'
        },

        jquery: {
            exports: '$'
        },

        backbone: {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        }
    }
});

