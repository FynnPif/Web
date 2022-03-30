import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import TaskAdder from './components/TaskAdder';
import Todo from './components/Todo';
import TodoList from './components/TodoList';
import React, { Component } from 'react'

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      todos:[{
        "id":1,
        "name":"einkaufen",
        "done":false
      },
      {
        "id":2,
        "name":"putzen",
        "done":false
      },
      ]
    }
  }

  addTask = (value) => {
    let todo = {
      id: 1,
      name: value,
      done: false
    }
    let todos = this.state.todos;
    todos.push(todo);

    this.setState({
      todos: todos
    })
  }

  render(){
    return (
      <div className="App">
        <Header/>
        <TaskAdder onTaskAdded={this.addTask}/>
        <TodoList todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
