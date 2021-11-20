import React, { Component } from "react";
import { EditText, EditTextarea } from "react-edit-text";
import "react-edit-text/dist/index.css";

import "./TaskModal.css";

export default class TaskModal extends Component {
  state = {
    taskToUpdate: {
      id: "",
      done: false,
      inProgress: false,
      name: "",
      notes: "",
    },
  };

  componentDidMount = () => {
    this.setState({
      taskToUpdate: {
        id: "",
        done: false,
        inProgress: false,
        name: "",
        notes: this.props.notes,
      },
    });
  };

  updateProgress = () => {
    if (this.props.inProgress === false) {
      this.setState({
        taskToUpdate: {
          id: this.props.id,
          done: false,
          inProgress: true,
          name: this.props.name,
          notes: this.state.notes,
        },
      });
    } else {
      this.setState({
        taskToUpdate: {
          id: this.props.id,
          done: true,
          inProgress: false,
          name: this.props.name,
          notes: this.state.notes,
        },
      });
    }
  };

  // handleChange = (e) => {
  //   this.setState({
  //     notes: e.target.value,
  //   });
  //   console.log("textarea on change =====> ", this.state.notes);
  // };

  handleSave = () => {
    this.setState({
      taskToUpdate: {
        notes: this.state.notes,
      },
    });
    this.props.updateTask(this.state.taskToUpdate);
  };

  handleClick = async (e) => {
    e.preventDefault();

    await this.updateProgress();
    this.props.updateTask(this.state.taskToUpdate);
  };

  render() {
    return (
      <div>
        <div className="modal">
          <div className="overlay"></div>
          <div className="modal-content">
            <h2>{this.props.name}</h2>
            <div className="notes-area">
              <EditTextarea
                // onChange={this.handleChange}
                value={this.state.notes}
                onSave={this.handleSave}
              />
            </div>

            <div className="btn-row">
              <div className="button-container">
                <button
                  className="in-progress-button"
                  onClick={this.handleClick}
                >
                  <i className="fas fa-angle-double-right"></i>
                </button>
                <button
                  className="delete-button"
                  onClick={() => this.props.deleteTask(this.props.id)}
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>
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
