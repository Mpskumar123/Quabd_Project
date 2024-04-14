import React, { useState, useEffect } from 'react';
import logo from './logo.jpeg'; 
import './App.css';
import TaskInput from './TaskInput';
import TaskList from './TaskList';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    const storedTodoList = JSON.parse(localStorage.getItem('todoList'));
    if (storedTodoList) {
      setTodoList(storedTodoList);
    }
  }, []);

  const displayNotification = (message) => {
    setNotification(message);
    setTimeout(() => {
      setNotification(null);
    }, 3000); 
  };

  const addTodoItem = (text) => {
    const newTodo = {
      text: text,
      uniqueId: Date.now(), 
      isChecked: false
    };
    setTodoList(prevTodoList => [...prevTodoList, newTodo]);
    displayNotification("Task added successfully!");
  };

  const deleteTodoItem = (id) => {
    setTodoList(prevTodoList => prevTodoList.filter(todo => todo.uniqueId !== id));
    displayNotification("Task deleted successfully!");
  };

  const toggleTodoCompletion = (id) => {
    setTodoList(prevTodoList =>
      prevTodoList.map(todo =>
        todo.uniqueId === id ? { ...todo, isChecked: !todo.isChecked } : todo
      )
    );
    displayNotification("Task status updated successfully!");
  };

  const handleSaveButtonClick = () => {
    localStorage.setItem('todoList', JSON.stringify(todoList));
    displayNotification("To-do list saved successfully!");
  };


  return (
    <div className="App">
      <img src={logo} alt="Company Logo" className="logo" />
      <header className="App-header">
        <h1>QUADB To-Do List</h1>
        {notification && <div className="notification">{notification}</div>}

        <TaskInput addTodoItem={addTodoItem} />
        <TaskList
          todoList={todoList}
          toggleTodoCompletion={toggleTodoCompletion}
          deleteTodoItem={deleteTodoItem}
        />

        <div className="footer">
          <p>You Can Save Your Progress here</p>
          <button onClick={handleSaveButtonClick}>Save</button>
        </div>
      </header>
    </div>
  );
}

export default App;
