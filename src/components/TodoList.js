import { PureComponent } from 'react';
import TodoItem from './TodoItem';

class TodoList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      tasks: this.props,
    };
  }

  render() {
    const { tasks } = this.state;
    return (
      <ul>
        {tasks.todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo.title} />
        ))}
      </ul>
    );
  }
}

export default TodoList;
