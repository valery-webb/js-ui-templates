define([
    'backbone'
    ,'text!../templates/tags.html'
    ],

    function (B, tagsTpl) {

        var TagsView = Backbone.View.extend({

            el: '.tags-view',

            template: _.template(tagsTpl),

            initialize: function(){
                this.render();
            },

            render: function() {
                var html,
                    data;

                html = this.template({
                    data: window.blogBootstrap.tags
                })

                this.$el.html(html);
                return this;
            }

        });

        return TagsView;
});