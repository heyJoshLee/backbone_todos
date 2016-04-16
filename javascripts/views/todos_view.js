App.TodosView = Backbone.View.extend({
  el: $("#todo_container"),
  template: Handlebars.compile($("#todo_container_template").html()),

  events: {
    "click #add_button" : "addTodo"
  },

  addTodo: function() {
    var title = $("#new_todo_input").val();
    $("#new_todo_input").val("");
    app.collection.create(new App.Todo({title: title}));
    console.log(title);
  },

  initialize: function() {
    this.date = arguments[0]["date"];
    this.listenTo(app.collection, "add", this.render);
    this.render();
  },

  render: function() {
    this.$el.html("");
    this.$el.html(this.template({date: this.date, collection_length: this.collection.length}));
    app.$el.find("#todo_container").append(this.$el);
    this.renderTodos()
    return this;
  },

  renderTodos: function() {
    var self = this;
    _.each(this.collection.toArray(), function(todo) {
      self.$el.find("ul").append( new App.TodoView({model: todo}).$el)
    })
  }
})