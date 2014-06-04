define([
    'backbone'
    ], 

    function (Backbone) {

        var TestCollection = Backbone.Collection.extend({

            url: '/host/folder',

            initialize: function(){
                console.log('test-collection ready');
            }

        });

        return TestCollection;
});