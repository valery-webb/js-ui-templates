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
                console.log(_,'_ in tags view')
                //console.log(under,'under in tags view')
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