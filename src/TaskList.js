import React from 'react';

function TaskList({ todoList, toggleTodoCompletion, deleteTodoItem }) {
  return (
    <div className="container">
      <ul>
        {todoList.length === 0 ? (
          <li>No tasks yet. Add a new task above.</li>
        ) : (
          todoList.map((todo) => (
            <li key={todo.uniqueId}>
              <input
                type="checkbox"
                checked={todo.isChecked}
                onChange={() => toggleTodoCompletion(todo.uniqueId)}
              />
              <span className={todo.isChecked ? 'checked' : ''}>{todo.text}</span>
              <button onClick={() => deleteTodoItem(todo.uniqueId)}>Delete</button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default TaskList;
