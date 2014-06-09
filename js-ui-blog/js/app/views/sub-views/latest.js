define([
    'backbone'
    ,'../../collections/blog-posts'
    ,'../../models/blog-post'
    ,'text!../../templates/latest.html'
    ],

    function (B, BlogPostsCollection, BlogPostModel, latestTpl) {

        var LatestPageView = Backbone.View.extend({

            el: '.latest',

            collection: new BlogPostsCollection,

            template: _.template(latestTpl),

            initialize: function() {

                this.collection.on('sync', this.processResults, this);
            },

            retrivePosts: function() {
                this.collection.fetch();
            },

            processResults: function(collection, response, xhr) {

                var posts = collection.toJSON();

                _.each(posts, function(post) {
                    var date = post.date['$date'],
                        dateToConvert =  new Date(date);
                        dateToConvert = dateToConvert.toString().substring(0, 21);
                        post.date['$date'] = dateToConvert;
                });

                this.render(posts)
            },

            render: function(posts) {

                var html = this.template({
                    posts:posts
                })

                this.$el.html(html);
                return this;
            }

        });

        return LatestPageView;
});