/** @format */

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
          id: 1,
          title: 'Setup development environment',
          completed: true,
        },
        {
          id: 2,
          title: 'Develop website and add content',
          completed: false,
        },
        {
          id: 3,
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

  addTodoItem = (title) => {
    const newTodo = {
      id: 4,
      title,
      completed: false,
    };
    this.setState((prevState) => ({
      todos: [...prevState.todos, newTodo],
    }));
  };

  render() {
    const { todos } = this.state;
    return (
      <>
        <Header />
        <InputTodo addTodoItem={this.addTodoItem} />
        <TodoList todos={todos} handleClick={this.handleClick} />
      </>
    );
  }
}

export default TodoContainer;
