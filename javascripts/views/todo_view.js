App.TodoView = Backbone.View.extend({
  tagName: "li",
  template: Handlebars.compile($("#todo_template").html()),

  events: {
    "click .trash_can": "deleteTodo"
  },

  deleteTodo: function() {
    console.log(this.model)
    this.model.destroy()
    this.remove();
  },

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }

})