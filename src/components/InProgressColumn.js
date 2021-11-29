import React from "react";

import TaskCard from "./TaskCard";

import "./TaskColumn.css";

const InProgressColumn = ({ tasks, updateTask, deleteTask }) => {
  const allTasks = tasks.map((task) => {
    if (task.count === 2) {
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
      <h3>In Progress</h3>
      <ul className="tasksList">{allTasks}</ul>
    </div>
  );
};

export default InProgressColumn;
