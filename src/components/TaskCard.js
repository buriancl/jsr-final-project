import React, { useState, useEffect, useRef } from "react";
// import TaskModal from "./TaskModal";
import { EditText, EditTextarea } from "react-edit-text";
import "react-edit-text/dist/index.css";
import "./TaskCard.css";

const TaskCard = (props) => {
  const [name, setName] = useState("");
  const [notes, setNotes] = useState("");
  const [modal, setModal] = useState(false);
<<<<<<< HEAD
=======
  const [count, setCount] = useState(1);
>>>>>>> 1b1b36b5ee6c9068df68cc459295457ed2940541

  useEffect(() => {
    setName(props.name);
    setCount(props.count);
    setNotes(props.notes);
  }, []);

  const firstUpdate = useRef(true);

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    props.updateTask(props.id, count, props.name, props.notes);
  }, [count]);

  const toggleModal = () => {
    if (modal === false) {
      setModal(true);
    } else {
      setModal(false);
    }
  };

  const handleClick = () => {
   
    setCount(count + 1);

    props.updateTask(props.id, count, props.name, props.notes);
  };

  const handleNameSave = (value) => {
    setName(value.value);
    props.updateTask(props.id, props.count, name, props.notes);
  };

  const handleNotesSave = (value) => {
    setNotes(value.value);
    props.updateTask(props.id, props.cout, props.name, notes);
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
        {/* <TaskModal
          toggleModal={toggleModal}
          id={props.id}
          name={props.name}
          inProgress={props.inProgress}
          done={props.done}
          updateProgress={props.updateProgress}
          deleteTask={props.deleteTask}
          updateTask={props.updateTask}
          notes={props.notes}
        /> */}
        <div className="taskNameDisplay" onClick={toggleModal}>
          {props.name}
        </div>
        <div>
          <div className="modal">
            <div className="editorsContainer">
              <EditText
                onChange={setName}
                value={name}
                onSave={handleNameSave}
                className="nameEditText"
              />
              <EditTextarea
                className="notesEditTextArea"
                onChange={setNotes}
                value={notes}
                onSave={handleNotesSave}
                placeholder="Add notes here"
              />
            </div>
          </div>
          <div className="btnContainer">
            {count < 3 ? (
              <>
                <button className="inProgressBtn" onClick={handleClick}>
                  <i className="fas fa-angle-double-right"></i>
                </button>
              </>
            ) : null}
            <button
              className="deleteBtn"
              onClick={() => props.deleteTask(props.id)}
            >
              <i className="fas fa-times"></i>
            </button>
            <button className="closeModalBtn" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export default TaskCard;
