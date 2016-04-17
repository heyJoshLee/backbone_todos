
var app = new App.AppView({collection: new App.Todos()});

app.todos_view = new App.TodosView({collection: app.collection});
new App.MenuView()

