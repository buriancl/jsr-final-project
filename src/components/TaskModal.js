import React, { Component } from "react";
import { EditText, EditTextarea } from "react-edit-text";
import "react-edit-text/dist/index.css";

import "./TaskModal.css";

export default class TaskModal extends Component {
  state = {};

  render() {
    return (
      <div>
        <div className="modal">
          <div className="overlay"></div>
          <div className="modal-content">
            <h2>{this.props.name}</h2>
            <div className="notes-area">
              <EditTextarea />
            </div>

            <div className="btn-row">
              <button className="update-btn">Accept Task</button>
              <button className="delete-btn">Delete</button>
              <button className="close-modal" onClick={this.props.toggleModal}>
                CLOSE
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
