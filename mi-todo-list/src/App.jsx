import React, { useState } from 'react';
import './assets/css/App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (e) => {
    if (e.key === 'Enter' && e.target.value !== '') {
      const newTask = {
        id: Date.now(),
        description: e.target.value,
        isDone: false,
      };
      setTasks([...tasks, newTask]);
      e.target.value = ''; // Limpiar input después de añadir
    }
  };

  const handleToggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, isDone: !task.isDone } : task
    ));
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div>
      <input type="text" onKeyDown={handleAddTask} placeholder="Add a new task and press Enter" />
      <ul>
        {tasks.map(task => (
          <li key={task.id} style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}>
            {task.description}
            <button onClick={() => handleToggleTask(task.id)}>Toggle</button>
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
