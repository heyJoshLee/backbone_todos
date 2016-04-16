App.Todos = Backbone.Collection.extend({
  url: "/api",
  model: App.Todo
});