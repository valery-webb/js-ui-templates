define([
    'backbone'
    ], 

    function (Backbone) {

        var TestModel = Backbone.Model.extend({

            url: '',

            initialize: function(){
                console.log('test-model ready');
            }

        });

        return TestModel;
});