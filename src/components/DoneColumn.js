import React from "react";
import TaskCard from "./TaskCard";
import "./TaskColumn.css";

const DoneColumn = ({ tasks, deleteTask, updateTask }) => {
  const allTasks = tasks.map((task) => {
    if (task.count === 3) {
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
      <h3>Done</h3>
      <ul className="tasksList doneList">{allTasks}</ul>
    </div>
  );
};

export default DoneColumn;
