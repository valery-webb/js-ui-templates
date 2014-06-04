define([
    'backbone'
    ], 

    function (Backbone) {

        var TestView = Backbone.View.extend({

            initialize: function(){
                console.log('test-view ready');
            }

        });

        return TestView;
});