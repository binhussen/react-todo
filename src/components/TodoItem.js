// eslint-disable-next-line react/prop-types
const TodoItem = ({ todo, handleClick }) => {
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
    </li>
  );
};

export default TodoItem;
