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
    if (task.count === 1) {
      return (
        <TaskCard
          key={task.id}
          id={task.id}
          name={task.name}
          count={task.count}
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
    <div className="tasksColumnContainer">
      <h3>Tasks</h3>
      <div className="tasksFormContainer">
        <form onSubmit={handleSubmit}>
          <input
            required
            onChange={handleChange}
            value={newTaskName}
            placeholder="New Task"
          />
          <button className="tasksFormInputBtn">+</button>
        </form>
      </div>
      <ul className="tasksList">{allTasks}</ul>
    </div>
  );
};

export default TaskColumn;
