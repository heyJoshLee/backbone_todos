App.ModalView = Backbone.View.extend({

  template: Handlebars.compile($("#modal_template").html()),

  events: {
    "click #close_button, #modal_bg": "closeModal",
    "dblclick .add_date": "showEdit",
    "click .save": "saveEdit",
    "click .mark_as_complete" : "markAsComplete",
    "click .mark_as_incomplete" : "markAsIncomplete"
  },

  markAsIncomplete: function() {
    this.model.set("complete", false);
    this.remove();
  },

  markAsComplete: function() {
    this.model.set("complete", true);
    this.remove();
  },

  saveEdit: function() {
    var date = $("#date_input").val();
    this.model.set("date", date);
  },

  showEdit: function() {
    this.$el.find(".add_date").html("")
    this.$el.find(".add_date").addClass("editing");
  },

  closeModal: function() {
    this.remove();
  },

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    app.$el.find("#modal_container").html(this.$el);
  }
})