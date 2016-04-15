App.TodoView = Backbone.View.extend({
  tagName: "li",
  template: Handlebars.compile($("#todo_template").html()),

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model));
    return this;
  }

})