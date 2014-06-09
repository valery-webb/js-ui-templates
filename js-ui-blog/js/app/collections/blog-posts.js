define([
    'backbone'
    ,'models/blog-post'
    ],

    function (B, BlogPostModel) {

        var BlogPostsCollection = Backbone.Collection.extend({

            url: 'js/app/mocks/posts_updated.json',

            model: BlogPostModel,

            initialize: function(){

            },

            parse: function(response) {
                return response;
            }

        });

        return BlogPostsCollection;
});