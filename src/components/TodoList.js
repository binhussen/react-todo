/* eslint-disable react/prop-types */
import { PureComponent } from 'react';
import TodoItem from './TodoItem';

class TodoList extends PureComponent {
  render() {
    const { todos, handleClick, handleDelete } = this.props;
    return (
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleClick={handleClick}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
    );
  }
}

export default TodoList;
