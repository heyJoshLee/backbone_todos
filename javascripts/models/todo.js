App.Todo = Backbone.Model.extend({

  defaults: {
    date: function() {
      var d = new Date();
      return (d.getMonth() + 1) + "/" + (d.getDate())
    }
  }
});