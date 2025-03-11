import React, { useState } from "react";

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    const newTask = {
      id: Date.now(),
      title: `Task ${tasks.length + 1}`,
      completed: false
    };
    setTasks([...tasks, newTask]); // Updating state immutably
  };

  const toggleTaskCompletion = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map(task => (
          <li key={task.id} style={{ textDecoration: task.completed ? "line-through" : "none" }}>
            {task.title}
            <button onClick={() => toggleTaskCompletion(task.id)}>
              {task.completed ? "Undo" : "Complete"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;
