App.AppView = Backbone.View.extend({
  el: $("main"),

  initialize: function() {
    this.listenTo(this.collection, "add", function() {
      console.log("a new todo was added")
    });
  }
});