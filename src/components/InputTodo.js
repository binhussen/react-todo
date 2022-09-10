import { useState } from 'react';

// eslint-disable-next-line react/prop-types
const InputTodo = ({ addTodoItem }) => {
  const [title, setTitle] = useState('');

  const onChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodoItem(title);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add todo..."
        value={title}
        onChange={onChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default InputTodo;
