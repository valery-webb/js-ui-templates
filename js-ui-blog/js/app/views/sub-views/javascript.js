define([
    'backbone'
    //,'text!../templates/javascript.html'
    ],

    function (B) {

        var JSPageView = Backbone.View.extend({

            el: '.javascript',

            //template: _.template(javascriptTpl),

            initialize: function(){
                //console.log('javascript view ready')
            },

            render: function() {
                //this.$el.html(this.template);
                return this;
            }

        });

        return JSPageView;
});