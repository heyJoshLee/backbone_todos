App.Todos = Backbone.Collection.extend({
  url: "/api",
  model: App.Todo,

  readStorage: function() {
    var ls_collection = JSON.parse(localStorage.getItem("todos_collection"));
    this.reset(ls_collection);
  },

  initialize: function() {
    this.listenTo(this, "change", this.saveToLocalStorage)
    this.listenTo(this, "add", this.saveToLocalStorage)
    this.listenTo(this, "remove", this.saveToLocalStorage)
    this.readStorage();
  },

  saveToLocalStorage: function() {
    console.log("saved locally");
    localStorage.setItem("todos_collection", JSON.stringify(app.collection));
  },
});