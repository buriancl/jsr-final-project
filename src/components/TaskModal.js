import React, { useState, useEffect } from "react";
import { EditText, EditTextarea } from "react-edit-text";
import "react-edit-text/dist/index.css";

import "./TaskModal.css";

const TaskModal = (props) => {
  const [done, setDone] = useState(false);
  const [inProgress, setInProgress] = useState(false);
  const [name, setName] = useState("");
  const [notes, setNotes] = useState("");

  useEffect(() => {
    setName(props.name);
    setNotes(props.notes);
  }, []);

  const updateProgress = () => {
    if (props.inProgress === false) {
      setInProgress(true);
    } else {
      setDone(true);
    }
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

  const handleClick = async (e) => {
    e.preventDefault();
    console.log(
      "handleClick =====> ",
      props.id,
      done,
      inProgress,
      props.name,
      props.notes
    );

    await updateProgress();
    props.updateTask(props.id, done, inProgress, props.name, props.notes);
  };

  return (
    <div>
      <div className="modal">
        <div className="overlay"></div>
        <div className="modal-content">
          <EditText onChange={setName} value={name} onSave={handleNameSave} />
          <div className="notes-area">
            <EditTextarea
              onChange={setNotes}
              value={notes}
              onSave={handleNotesSave}
              placeholder="Add notes here"
            />
          </div>

          <div className="btn-row">
            <div className="button-container">
              <button className="in-progress-button" onClick={handleClick}>
                <i className="fas fa-angle-double-right"></i>
              </button>
              <button
                className="delete-button"
                onClick={() => props.deleteTask(props.id)}
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            <button className="close-modal" onClick={props.toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskModal;
