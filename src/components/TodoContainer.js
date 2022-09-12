/** @format */

import { v4 as uuidv4 } from 'uuid';
import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import InputTodo from './InputTodo';
import Navbar from './Navbar';
import About from '../pages/About';
import NotMatch from '../pages/NotMatch';

const { Component } = require('react');
const { default: TodoList } = require('./TodoList');

class TodoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
    this.handleClick = this.handleClick.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
  }

  componentDidMount() {
    const temp = localStorage.getItem('todos');
    const loadedTodos = JSON.parse(temp);
    if (loadedTodos) {
      this.setState({
        todos: loadedTodos,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { todos } = this.state;
    if (prevState.todos !== todos) {
      const temp = JSON.stringify(todos);
      localStorage.setItem('todos', temp);
    }
  }

  componentWillUnmount() {
    // console.log('Cleaning up...');
  }

  handleClick(id) {
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
  }

  setUpdate(updatedTitle, id) {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            title: updatedTitle,
          };
        }
        return todo;
      }),
    }));
  }

  addItem(title) {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    this.setState((prevState) => ({
      todos: [...prevState.todos, newTodo],
    }));
  }

  deleteItem(id) {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== id),
    }));
  }

  render() {
    const { todos } = this.state;
    return (
      <>
        <Navbar />
        <Routes>
          <Route
            path="/"
            exact
            element={(
              <div className="container">
                <div className="inner">
                  <Header />
                  <InputTodo addTodoItem={this.addItem} />
                  <TodoList
                    todos={todos}
                    handleClick={this.handleClick}
                    handleDelete={this.deleteItem}
                    setUpdate={this.setUpdate}
                  />
                </div>
              </div>
          )}
          />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotMatch />} />
        </Routes>
      </>
    );
  }
}

export default TodoContainer;
