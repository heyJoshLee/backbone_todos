
var app = new App.AppView({collection: new App.Todos()});
new App.MenuView()
new App.TodosView({collection: app.collection, date: "12/12"});

function getDates() {
  return _.uniq(_.pluck(app.collection.toJSON(), "date"));
}

