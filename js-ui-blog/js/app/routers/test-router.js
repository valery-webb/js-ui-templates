define([
    'backbone'
    ],

    function (B) {

    var BlogRouter = Backbone.Router.extend({

      routes: {
        '': 'default',
        'javascript': 'javascript',
        'css': 'css',
        'latest': 'latest',
        'html': 'html',
        'design': 'design',

      },

      default: function() {
alert('default')
      },

      javascript: function() {
alert('javascript')
      },
      css: function() {

      },
      latest: function() {

      },
      html: function() {

      },

      design: function() {

      }

    });

        return BlogRouter;
});
