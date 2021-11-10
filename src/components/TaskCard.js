import React, { Component } from "react";

import "./TaskCard.css";

export default class TaskCard extends Component {
  state = {
    taskToUpdate: {
      id: "",
      done: false,
      inProgress: false,
      name: "",
    },
  };

  updateProgress = () => {
    if (this.props.inProgress === false) {
      this.setState({
        taskToUpdate: {
          id: this.props.id,
          done: false,
          inProgress: true,
          name: this.props.name,
        },
      });
    } else {
      this.setState({
        taskToUpdate: {
          id: this.props.id,
          done: true,
          inProgress: false,
          name: this.props.name,
        },
      });
    }
  };

  handleClick = async (e) => {
    e.preventDefault();

    await this.updateProgress();
    this.props.updateTask(this.state.taskToUpdate);
  };

  render() {
    if (this.props.done === true) {
      return (
        <div className="task-card">
          <div className="task-name">{this.props.name}</div>
          <div className="button-container">
            <button
              className="delete-button"
              onClick={() => this.props.deleteTask(this.props.id)}
            >
              {/* <i className="fas fa-times"></i> */}X
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <div className="task-card">
          <div className="task-name">{this.props.name}</div>
          <div className="button-container">
            <button className="in-progress-button" onClick={this.handleClick}>
              <i className="fas fa-angle-double-right"></i>
            </button>
            <button
              className="delete-button"
              onClick={() => this.props.deleteTask(this.props.id)}
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
        </div>
      );
    }
  }
}
