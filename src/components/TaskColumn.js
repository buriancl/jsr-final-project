import React, { Component } from "react";
import TaskCard from "./TaskCard";

import "./TaskColumn.css";

export default class TaskColumn extends Component {
  state = {
    newTaskName: "",
  };

  handleChange = (e) => {
    this.setState({
      newTaskName: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newTaskObj = {
      name: this.state.newTaskName,
    };
    this.props.addTask(newTaskObj);
    this.setState({
      newTaskName: "",
    });
  };

  render() {
    const allTasks = this.props.tasks.map((task) => {
      if (task.done === false && task.inProgress === false) {
        return (
          <TaskCard
            key={task.id}
            id={task.id}
            name={task.name}
            inProgress={task.inProgress}
            done={task.done}
            updateTask={this.props.updateTask}
            deleteTask={this.props.deleteTask}
          />
        );
      } else {
        return null;
      }
    });

    return (
      <div className="tasks-column">
        <h3>Tasks</h3>
        <div className="tasks-control-bar">
          <form onSubmit={this.handleSubmit}>
            <input
              required
              onChange={this.handleChange}
              value={this.state.newTaskName}
            />
            <button className="task-submit">+</button>
          </form>
        </div>
        <ul className="tasks-list">{allTasks}</ul>
      </div>
    );
  }
}
