import React, { Component } from "react";
import TaskModal from "./TaskModal";

import "./TaskCard.css";

export default class TaskCard extends Component {
  state = {
    taskToUpdate: {
      id: "",
      done: false,
      inProgress: false,
      name: "",
    },

    modal: false,
  };

  toggleModal = () => {
    if (this.state.modal === false) {
      this.setState({
        modal: true,
      });
    } else {
      this.setState({
        modal: false,
      });
    }
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
    if (this.props.done === true && this.state.modal === false) {
      return (
        <div className="task-card">
          <div className="task-name" onClick={this.toggleModal}>
            {this.props.name}
          </div>
          <div className="button-container">
            <button
              className="delete-button"
              onClick={() => this.props.deleteTask(this.props.id)}
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
        </div>
      );
    } else if (this.props.done === false && this.state.modal === false) {
      return (
        <div className="task-card">
          <div className="task-name" onClick={this.toggleModal}>
            {this.props.name}
          </div>
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
    } else if (this.props.done === true && this.state.modal === true) {
      return (
        <div className="task-card">
          <TaskModal
            toggleModal={this.toggleModal}
            id={this.props.id}
            name={this.props.name}
            inProgress={this.props.inProgress}
            done={this.props.done}
            updateProgress={this.props.updateProgress}
            deleteTask={this.props.deleteTask}
          />
          <div className="task-name" onClick={this.toggleModal}>
            {this.props.name}
          </div>
          <div className="button-container">
            <button
              className="delete-button"
              onClick={() => this.props.deleteTask(this.props.id)}
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <div className="task-card">
          <TaskModal
            toggleModal={this.toggleModal}
            id={this.props.id}
            name={this.props.name}
            inProgress={this.props.inProgress}
            done={this.props.done}
            updateProgress={this.props.updateProgress}
            deleteTask={this.props.deleteTask}
          />
          <div className="task-name" onClick={this.toggleModal}>
            {this.props.name}
          </div>
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
