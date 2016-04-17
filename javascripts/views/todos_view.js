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
    this.listenTo(this.collection, "change:complete", this.render);
    this.render();
  },

  render: function(date) {
    var current_collection;
    // If date is passed filter collection, else show whole collection 
    // Check against string because binded event passes the new todo Object
    if (typeof date === "string") {
      this.date = date;
      current_collection = new App.Todos(app.collection.where({date: date}));
    } else {
      this.date = "All Todos"
      current_collection = new App.Todos(app.collection.toArray());
    }
    var incomplete_todos = current_collection.where({complete: false}).length;
    this.$el.html(this.template({date: this.date, incomplete_length: incomplete_todos}));
    app.$el.find("#todo_container").append(this.$el);
    this.renderTodos(current_collection)
    return this;
  },


  renderTodos: function(collection) {
    var self = this;    
    var incomplete_todos = [],
        complete_todos = [];

    for(var i = 0; i < collection.toArray().length; i ++) {
      var current_todo = collection.toArray()[i];
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