App.AppView = Backbone.View.extend({
  el: $("main"),

  initialize: function() {
    console.log("a new app view was born");
    this.listenTo(this.collection, "add", function() {
      console.log("a new todo was added")
    });
  }
});