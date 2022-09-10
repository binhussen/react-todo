/** @format */

import { useState } from 'react';
import style from './TodoItem.module.css';

const TodoItem = ({
  // eslint-disable-next-line react/prop-types
  todo, handleClick, handleDelete, setUpdate,
}) => {
  const [editing, setEditing] = useState(false);
  // eslint-disable-next-line react/prop-types
  const { id, title, completed } = todo;
  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };
  const handleEditing = () => {
    setEditing(true);
  };
  const viewMode = {};
  const editMode = {};

  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setEditing(false);
    }
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
      <span style={completed ? completedStyle : null}>{title}</span>
      <div
        onDoubleClick={handleEditing}
        style={viewMode}
      >
        ...
      </div>
      <input
        type="text"
        style={editMode}
        className={style.textInput}
        value={title}
        onChange={(e) => { setUpdate(e.target.value, id); }}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  );
};

export default TodoItem;
