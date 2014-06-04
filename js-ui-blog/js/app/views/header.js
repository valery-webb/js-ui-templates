define([
    'backbone'
    ,'text!../templates/header.html'
    ],

    function (B, headerTpl) {

        var HeaderView = Backbone.View.extend({

            el: '.header-view',

            template: _.template(headerTpl),

            initialize: function(){
                this.render();
            },

            render: function() {
                this.$el.html(this.template);
                return this;
            }

        });

        return HeaderView;
});