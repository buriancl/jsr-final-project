import React, { useState } from "react";
import TaskModal from "./TaskModal";
import "./TaskCard.css";

const TaskCard = (props) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    if (modal === false) {
      setModal(true);
    } else {
      setModal(false);
    }
  };

  if (modal === false) {
    return (
      <div className="taskCardContainer">
        <div className="taskNameDisplay" onClick={toggleModal}>
          {props.name}
        </div>
      </div>
    );
  } else {
    return (
      <div className="taskCardContainer">
        <TaskModal
          toggleModal={toggleModal}
          id={props.id}
          name={props.name}
          inProgress={props.inProgress}
          done={props.done}
          updateProgress={props.updateProgress}
          deleteTask={props.deleteTask}
          updateTask={props.updateTask}
          notes={props.notes}
        />
        <div className="taskNameDisplay" onClick={toggleModal}>
          {props.name}
        </div>
      </div>
    );
  }
};

export default TaskCard;
