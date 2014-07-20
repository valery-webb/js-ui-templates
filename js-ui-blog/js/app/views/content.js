define([
    //'backbone'
    'views/sub-views/javascript'
    ,'views/sub-views/latest'
    ,'../globals'
    ],

    function (JSPageView, LatestPageView, globals) {

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
                //this[opts.pageName](opts.pageName);
                this[opts.pageName](opts);
            },

            JSPage: function(opts) {
                this.$el.find("[data-page='" + opts.pageName + "']");
            },

            cssPage: function(opts) {
                this.$el.find("[data-page='" + opts.pageName + "']").html(opts.pageName);
            },

            latestPage: function(opts) {
                this.subViews.latestPageView.retrivePosts();
            },

            htmlPage: function(opts) {
                this.$el.find("[data-page='" + opts.pageName + "']").html(opts.pageName);
            },

            designPage: function(opts) {
                this.$el.find("[data-page='" + opts.pageName + "']").html(opts.pageName);
            },

            render: function() {

                this.$el.append('oops');

                return this;
            }

        });

        return ContentView;
});