App.ModalView = Backbone.View.extend({

  template: Handlebars.compile($("#modal_template").html()),

  events: {
    "click #close_button, #modal_bg": "closeModal"
  },

  closeModal: function() {
    this.remove();
  },

  initialize: function() {
    console.log("modal model is")
    console.log(this.model)
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    app.$el.find("#modal_container").html(this.$el);
  }
})