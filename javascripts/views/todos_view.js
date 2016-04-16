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
  },

  initialize: function() {
    this.date = arguments[0]["date"];
    this.listenTo(app.collection, "add", this.render);
    this.listenTo(this.collection, "change:complete", this.render)
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
    
    var incomplete_todos = [],
        complete_todos = [];

    for(var i = 0; i < this.collection.toArray().length; i ++) {
      var current_todo = this.collection.toArray()[i];
      if (current_todo.get("complete")) {
        complete_todos.push(current_todo);
      } else {
        incomplete_todos.push(current_todo);
      }
    }

    var sorted_todos = incomplete_todos.concat(complete_todos);

    _.each(sorted_todos, function(todo) {
      self.$el.find("ul").append( new App.TodoView({model: todo}).$el)
    })
  }
})