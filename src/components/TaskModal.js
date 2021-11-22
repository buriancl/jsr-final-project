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
    setInProgress(props.inProgress);
    setDone(props.done);
    setNotes(props.notes);
  }, []);

  useEffect(() => {
    props.updateTask(props.id, done, inProgress, props.name, props.notes);
  }, [done, inProgress]);

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
              {done === false ? (
                <>
                  <button className="in-progress-button" onClick={handleClick}>
                    <i className="fas fa-angle-double-right"></i>
                  </button>
                </>
              ) : null}
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
