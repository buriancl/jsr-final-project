import React from "react";

import "./DoneColumn.css";
import TaskCard from "./TaskCard";

const DoneColumn = (props) => {
  const allTasks = props.tasks.map((task) => {
    if (task.done === true) {
      return (
        <TaskCard
          key={task.id}
          id={task.id}
          name={task.name}
          inProgress={task.inProgress}
          done={task.done}
          deleteTask={props.deleteTask}
        />
      );
    } else {
      return null;
    }
  });
  return (
    <div className="done-column">
      <h3>Done</h3>
      <ul className="done-list">{allTasks}</ul>
    </div>
  );
};

export default DoneColumn;
