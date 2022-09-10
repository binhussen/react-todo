/** @format */

import { v4 as uuidv4 } from 'uuid';
import Header from './Header';
import InputTodo from './InputTodo';

const { Component } = require('react');
const { default: TodoList } = require('./TodoList');

class TodoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: uuidv4(),
          title: 'Setup development environment',
          completed: true,
        },
        {
          id: uuidv4(),
          title: 'Develop website and add content',
          completed: false,
        },
        {
          id: uuidv4(),
          title: 'Deploy to live server',
          completed: false,
        },
      ],
    };
  }

 handleClick = (id) => {
   this.setState((prevState) => ({
     todos: prevState.todos.map((todo) => {
       if (todo.id === id) {
         return {
           ...todo,
           completed: !todo.completed,
         };
       }
       return todo;
     }),
   }));
 };

  addItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    this.setState((prevState) => ({
      todos: [...prevState.todos, newTodo],
    }));
  };

  deleteItem = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => (todo.id !== id)),
    }));
  };

  render() {
    const { todos } = this.state;
    return (
      <>
        <Header />
        <InputTodo addTodoItem={this.addItem} />
        <TodoList todos={todos} handleClick={this.handleClick} handleDelete={this.deleteItem} />
      </>
    );
  }
}

export default TodoContainer;
