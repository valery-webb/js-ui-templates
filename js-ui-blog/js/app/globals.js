define([
    'backbone'
], function (Backbone) {

  var globals = {};

    globals.pubSub = _.extend({}, Backbone.Events);

  return globals;

});