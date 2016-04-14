App.MenuView = Backbone.View.extend({
  el: $("#menu"),
  template: Handlebars.compile($("#menu_template").html()),

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template({completed: null, uncompleted: null}));
    app.$el.find("#menu").append(this.$el);
    return this;
  }
})