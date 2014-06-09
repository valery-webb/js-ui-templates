define([
    'backbone'
    ,'views/sub-views/javascript'
    ,'views/sub-views/latest'
    ,'../globals'
    ],

    function (Backbone, JSPageView, LatestPageView, globals) {

        var ContentView = Backbone.View.extend({

            el: '.content-view',

            subViews: {},

            initialize: function() {

                this.instantiateSubviews();
                Backbone.pubSub.on('page:changed', this.pageStrategy, this);
            },

            instantiateSubviews: function() {
                this.subViews.jsPageView = new JSPageView();
                this.subViews.latestPageView = new LatestPageView;
            },

            pageStrategy: function(opts) {
                this.$el.find('section > div').hide();
                this.$el.find("[data-page='" + opts.pageName + "']").show();
                this[opts.pageName](opts.pageName);
            },

            JSPage: function(pageName) {
                this.$el.find("[data-page='" + pageName + "']").html(pageName);
            },

            cssPage: function(pageName) {
                this.$el.find("[data-page='" + pageName + "']").html(pageName);
            },

            latestPage: function(pageName) {
                this.subViews.latestPageView.retrivePosts();
            },

            htmlPage: function(pageName) {
                this.$el.find("[data-page='" + pageName + "']").html(pageName);
            },

            designPage: function(pageName) {
                this.$el.find("[data-page='" + pageName + "']").html(pageName);
            },

            render: function() {

                this.$el.append('oops');

                return this;
            }

        });

        return ContentView;
});