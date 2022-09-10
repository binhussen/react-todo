import { useState } from 'react';

// eslint-disable-next-line react/prop-types
const InputTodo = ({ addTodoItem }) => {
  const [title, setTitle] = useState('');

  const onChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTodoItem(title);
      setTitle('');
    }
  };
  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        className="input-text"
        name="title"
        type="text"
        placeholder="Add todo..."
        value={title}
        onChange={onChange}
        required
      />
      <button className="input-submit" type="submit">Submit</button>
    </form>
  );
};

export default InputTodo;
