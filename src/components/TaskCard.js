import React, { useState, useEffect } from "react";
// import TaskModal from "./TaskModal";
import { EditText, EditTextarea } from "react-edit-text";
import "react-edit-text/dist/index.css";
import "./TaskCard.css";

const TaskCard = (props) => {
  const [done, setDone] = useState(false);
  const [inProgress, setInProgress] = useState(false);
  const [name, setName] = useState("");
  const [notes, setNotes] = useState("");
  const [modal, setModal] = useState(false);

  useEffect(() => {
    setName(props.name);
    setInProgress(props.inProgress);
    setDone(props.done);
    setNotes(props.notes);
  }, []);

  useEffect(() => {
    props.updateTask(props.id, done, inProgress, props.name, props.notes);
  }, [done, inProgress]);

  const toggleModal = () => {
    if (modal === false) {
      setModal(true);
    } else {
      setModal(false);
    }
  };

  const handleClick = () => {
    updateProgress();
    props.updateTask(props.id, done, inProgress, props.name, props.notes);
  };

  const updateProgress = () => {
    if (inProgress === false) {
      setInProgress(true);
      setDone(false);
    } else {
      setInProgress(false);
      setDone(true);
    }
    console.log("updateProgress =====> ", inProgress, done);
  };

  const handleNameSave = (value) => {
    console.log("onSaveName =====> ", value.value);
    setName(value.value);
    console.log("name ====> ", name);
    props.updateTask(props.id, done, inProgress, name, props.notes);
  };

  const handleNotesSave = (value) => {
    console.log("onSaveNotes value ====> ", value.value);
    setNotes(value.value);
    console.log("notes =====> ", notes);
    props.updateTask(props.id, done, inProgress, props.name, notes);
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
            {done === false ? (
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
