
import './App.css';
import React, { useState,useEffect } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from './component/Header';
import Todos from './component/Todos';
import About from './component/About';
import Footer from './component/Footer';
import AddTodo from './component/AddTodo';

function App() {
  let initTodo;
  if(localStorage.getItem('todos')===null){
    initTodo = [];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem('todos'));
  }
  const onDelete = (todo)=>{
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))  
  }
 
  const [todos, setTodos] = useState(initTodo);
  const addTodo = (todo)=>{
    const todosArr = [...todos,todo]
    setTodos(todosArr);
      localStorage.setItem('todos', JSON.stringify(todos));
  }
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])
  return (
    <div className="App">
      <BrowserRouter>
            <Header title="Todos" />
            <Switch>
              <Route exact path="/">
              <AddTodo addTodo={addTodo} todos={todos}/>
              <Todos todos={todos} onDelete={onDelete}/>
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
            </Switch>
        <Footer />
     </BrowserRouter>
    </div>
  );
}

export default App;
