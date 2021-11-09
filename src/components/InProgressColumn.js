import React from "react";

import "./InProgressColumn.css";
import TaskCard from "./TaskCard";

const InProgressColumn = (props) => {
  const allTasks = props.tasks.map((task) => {
    if (task.inProgress === true) {
      return (
        <TaskCard
          key={task.id}
          id={task.id}
          name={task.name}
          inProgress={task.inProgress}
          done={task.done}
          updateTask={props.updateTask}
          deleteTask={props.deleteTask}
        />
      );
    } else {
      return null;
    }
  });
  return (
    <div className="in-progress-column">
      <h3>In Progress</h3>
      <ul className="in-progress-list">{allTasks}</ul>
    </div>
  );
};

export default InProgressColumn;
