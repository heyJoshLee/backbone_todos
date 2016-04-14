var todos_collection = [
  {title: "Wash dog", date: "12/12", complete: false},
  {title: "Wash car", date: "1/1", complete: false},
  {title: "walk dog", date: "09/30", complete: false},
  {title: "dfdfd dog", date: "5/22", complete: false},
  {title: "2342 43", date: "05/05", complete: false},
]

var app = new App.AppView({collection: new App.Todos()});

app.collection.add(todos_collection);
new App.MenuView()
new App.TodosView({collection: app.collection});