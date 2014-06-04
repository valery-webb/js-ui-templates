define([
    'backbone'
    ,'text!../templates/menu.html'
    ],

    function (B, menuTpl) {

        var MenuView = Backbone.View.extend({

            el: '.menu-view',

            template: _.template(menuTpl),

            initialize: function(){

                this.render();
            },

            render: function() {

                var html,
                    data = window.blogBootstrap;

                html = this.template({
                    menuItems: data.menuItems,
                    serviceBtns: data.serviceBtns
                });

                this.$el.html(html);

                return this;
            }

        });

        return MenuView;
});