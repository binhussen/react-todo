import style from './TodoItem.module.css';

// eslint-disable-next-line react/prop-types
const TodoItem = ({ todo, handleClick, handleDelete }) => {
  // eslint-disable-next-line react/prop-types
  const { id, title, completed } = todo;
  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };
  return (
    <li className={style.item}>
      <input
        type="checkbox"
        className={style.checkbox}
        checked={completed}
        onChange={() => handleClick(id)}
      />
      <button type="button" onClick={() => handleDelete(id)}>
        Delete
      </button>
      <span style={completed ? completedStyle : null}>
        {title}
      </span>
    </li>
  );
};

export default TodoItem;
