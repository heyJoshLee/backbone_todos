App.MenuView = Backbone.View.extend({
  template: Handlebars.compile($("#menu_template").html()),

  events: {
    "click .date": "switchTodo",
    "click #all_todos_button": "renderAllTodos"
  },

  renderAllTodos: function(e) {
    var active = $(e.currentTarget);
        active.addClass('active');
        $('li').removeClass('active');
    new App.TodosView({collection: app.collection, date: "All Todos"});
  },

  switchTodo: function(e) {
    var active = $(e.currentTarget);
        active.addClass('active');
        $('li').not(active).removeClass('active');
        $("h1").removeClass("active")

    var date = $(e.target).attr("data-date");

    new App.TodosView({collection: new App.Todos(app.collection.where({date: date})), date: date});
  },

  initialize: function() {
    this.listenTo(app.collection, "change", this.render);
    this.listenTo(app.collection, "add", this.render);
    this.listenTo(app.collection, "remove", this.render);
    this.render();
  },

  getDates: function() {
    return _.uniq(_.pluck(app.collection.toJSON(), "date"));
  },

  render: function() {
    console.log("rendering menu")
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