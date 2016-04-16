App.Todo = Backbone.Model.extend({

  defaults: {
    date:  (new Date().getFullYear() + "-" + (new Date().getMonth() + 1) + "-" + (new Date().getDate())),
    complete: false
  }
});