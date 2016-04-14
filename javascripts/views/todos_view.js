App.TodosView = Backbone.View.extend({
  el: $("#todo_container"),
  template: Handlebars.compile($("#todo_container_template").html()),

  initialize: function() {
    this.render();
    this.renderTodos();
  },


  render: function(date) {
    this.$el.html(this.template({date: date}));
    app.$el.find("#todo_container").append(this.$el);
    return this;
  },

  renderTodos: function() {
    var self = this;
    _.each(this.collection.toArray(), function(todo) {
      console.log(todo)
      self.$el.find(".todos").append( new App.TodoView({model:todo.toJSON()}).$el)
    })
  }
})