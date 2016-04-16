App.MenuView = Backbone.View.extend({
  template: Handlebars.compile($("#menu_template").html()),

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template({completed: [{title: "wash dog", date: "12/12"}], uncompleted: {title: "wash dog", date: "12/12"}}));
    app.$el.find("#menu").append(this.$el);
    return this;
  }
})