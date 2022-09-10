// eslint-disable-next-line react/prop-types
const TodoItem = ({ todo, handleClick, handleDelete }) => {
  // eslint-disable-next-line react/prop-types
  const { id, title, completed } = todo;
  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => handleClick(id)}
      />
      {title}
      <button type="button" onClick={() => handleDelete(id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
