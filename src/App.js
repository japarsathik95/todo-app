import React from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="app-todo">
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
