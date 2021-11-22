import React, { useState } from "react";
import TaskCard from "./TaskCard";

import "./TaskColumn.css";

const TaskColumn = ({ tasks, updateTask, deleteTask, addTask }) => {
  const [newTaskName, setNewTaskName] = useState("");

  const handleChange = (e) => {
    setNewTaskName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTaskObj = {
      name: newTaskName,
    };
    addTask(newTaskObj);
    setNewTaskName("");
  };

  const allTasks = tasks.map((task) => {
    if (task.done === false && task.inProgress === false) {
      return (
        <TaskCard
          key={task.id}
          id={task.id}
          name={task.name}
          inProgress={task.inProgress}
          done={task.done}
          updateTask={updateTask}
          deleteTask={deleteTask}
          notes={task.notes}
        />
      );
    } else {
      return null;
    }
  });

  return (
    <div className="tasks-column">
      <h3>Tasks</h3>
      <div className="tasks-control-bar">
        <form onSubmit={handleSubmit}>
          <input required onChange={handleChange} value={newTaskName} />
          <button className="task-submit">+</button>
        </form>
      </div>
      <ul className="tasks-list">{allTasks}</ul>
    </div>
  );
};

export default TaskColumn;
