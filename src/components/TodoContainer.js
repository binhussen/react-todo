/** @format */

import Header from './Header';

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

 render() {
   const { todos } = this.state;
   return (
     <>
       <Header />
       <TodoList todos={todos} handleClick={this.handleClick} />
     </>
   );
 }
}

export default TodoContainer;
