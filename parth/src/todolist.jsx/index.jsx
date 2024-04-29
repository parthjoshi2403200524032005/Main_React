import React, { useState } from 'react';
import './two.css';

const Two = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Hit the gym', checked: false },
    { id: 2, text: 'Pay bills', checked: true },
    { id: 3, text: 'Meet George', checked: false },
    { id: 4, text: 'Buy eggs', checked: false },
    { id: 5, text: 'Read a book', checked: false },
    { id: 6, text: 'Organize office', checked: false },
  ]);

  const handleToggle = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, checked: !task.checked } : task
      )
    );
  };

  const handleAdd = () => {
    const inputValue = prompt('Enter a task:');
    if (inputValue) {
      setTasks((prevTasks) => [
        ...prevTasks,
        { id: prevTasks.length + 1, text: inputValue, checked: false },
      ]);
    }
  };

  const handleDelete = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <div>
      <div className="header">
        <h2>My To Do List</h2>
        <span onClick={handleAdd} className="addBtn">
          Add
        </span>
      </div>

      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            className={task.checked ? 'checked' : ''}
            onClick={() => handleToggle(task.id)}
          >
            {task.text}
            <span className="close" onClick={() => handleDelete(task.id)}>
              {'\u00D7'}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Two;
