import React, { useState } from 'react';

function TaskInput({ addTodoItem }) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddButtonClick = () => {
    if (inputValue.trim() !== '') {
      addTodoItem(inputValue);
      setInputValue('');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Your New Task"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button onClick={handleAddButtonClick}>Add</button>
    </div>
  );
}

export default TaskInput;
