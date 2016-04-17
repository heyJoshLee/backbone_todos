App.MenuView = Backbone.View.extend({
  template: Handlebars.compile($("#menu_template").html()),

  events: {
    "click .date, #all_todos_button": "switchTodos"
  },

  // render different todo lists
  switchTodos: function(e) {
    var active = $(e.currentTarget),
        date = $(e.target).attr("data-date");

    $('li, h1').removeClass('active');
    active.addClass('active');

    app.todos_view.render(date);
  },

  initialize: function() {
    this.listenTo(app.collection, "change", this.render);
    // this.listenTo(app.collection, "add", this.render);
    // this.listenTo(app.collection, "remove", this.render);
    this.render();
  },

  // get list of unique dates from whole collection
  getDates: function() {
    return _.uniq(_.pluck(app.collection.toJSON(), "date"));
  },

  render: function() {
    var dates = this.getDates();

     var incomplete_dates = [],
        complete_dates = [];

    // if all todos for a given date are complete then render under the completed section
    for(var i = 0; i < dates.length; i++) {
      if ( app.collection.where({date: dates[i]}).every(function(todo) {return todo.get("complete")})  ) // every
      {
        complete_dates.push(dates[i]);
      } else {
        incomplete_dates.push(dates[i]);
      }
    }

    this.$el.html(this.template({incomplete_count: incomplete_dates.length, complete: complete_dates, incomplete: incomplete_dates}));
    app.$el.find("#menu").append(this.$el);
    return this;
  }
})