define([
    'backbone'
    ,'text!../templates/aside.html'
    ],

    function (B, asideTpl) {

        var AsideView = Backbone.View.extend({

            el: '.aside-view',

            template: _.template(asideTpl),

            initialize: function(){
                this.render();
            },

            render: function() {
                var html,
                    data;

                html = this.template({
                    data: window.blogBootstrap.asideData
                })

                this.$el.html(html);
                return this;
            }

        });

        return AsideView;
});