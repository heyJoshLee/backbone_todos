App.TodoView = Backbone.View.extend({
  tagName: "li",
  template: Handlebars.compile($("#todo_template").html()),

  events: {
    "click .trash_can": "deleteTodo",
    "click .modal_launcher": "launchModal",
    "click [type='checkbox']": "toggleComplete"
  },

  toggleComplete: function() {
    this.model.set("complete", !this.model.get("complete"));
  },

  launchModal: function() {
    console.log(this.model)
    new App.ModalView({model: this.model});
    console.log("Should launch modal");
  },

  deleteTodo: function() {
    console.log(this.model)
    this.model.destroy()
    this.remove();
  },

  initialize: function() {
    this.render();
    this.listenTo(this.model, "change", this.render);

  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }

})