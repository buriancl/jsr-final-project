import React, { Component } from "react";
import TaskModal from "./TaskModal";

import "./TaskCard.css";

export default class TaskCard extends Component {
  state = {
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

  render() {
    if (this.state.modal === false) {
      return (
        <div className="task-card">
          <div className="task-name" onClick={this.toggleModal}>
            {this.props.name}
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
            updateTask={this.props.updateTask}
            notes={this.props.notes}
          />
          <div className="task-name" onClick={this.toggleModal}>
            {this.props.name}
          </div>
        </div>
      );
    }
  }
}
