import "./App.css";
import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";
import { Footer } from "./MyComponents/Footer";
import { CreateTodo } from "./MyComponents/CreateTodo";
import { About } from "./MyComponents/About";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) initTodo = [];
  else initTodo = JSON.parse(localStorage.getItem("todos"));

  const onDelete = (todo) => {
    console.log("I am onDelete of ", todo.title);
    setTodos(
      todos.filter((data) => {
        return data !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (title, description) => {
    console.log("I am addTodo of ", title);
    let sno =
      todos.length === 0
        ? 1
        : todos[todos.length - 1].sno !== null
        ? todos[todos.length - 1].sno + 1
        : 1;
    const newTodo = {
      sno: sno,
      title: title,
      desc: description,
    };
    setTodos([...todos, newTodo]);
    console.log(newTodo);
  };

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Router>
        <Header title="My todo list" searchBar={false} />
        <Switch>
            <Route exact path="/" render = {()=> {
              return (<>
              <CreateTodo addTodo={addTodo} />
              <Todos todos={todos} onDelete={onDelete} />
              </>)
            }}>
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
          </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
