import React, { Component } from "react";
import TaskColumn from "../components/TaskColumn";
import InProgressColumn from "../components/InProgressColumn";
import DoneColumn from "../components/DoneColumn";
import db from "../config/firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  doc,
  deleteDoc,
  setDoc,
} from "firebase/firestore";

import "./Kanban.css";

export default class Kanban extends Component {
  state = {
    tasks: [],
  };

  componentDidMount() {
    this.readTasks();
  }

  readTasks = async () => {
    const tasksCol = collection(db, "tasks");
    const tasksSnapshot = await getDocs(tasksCol);
    const taskList = [];
    tasksSnapshot.forEach((task) => {
      const eachTask = {
        id: task.id,
        name: task.data().name,
        done: task.data().done,
        inProgress: task.data().inProgress,
        notes: task.data().notes,
      };
      taskList.push(eachTask);
    });

    this.setState({
      tasks: taskList,
    });
  };

  addTask = async (newTask) => {
    const tasksCol = collection(db, "tasks");

    await addDoc(tasksCol, {
      name: newTask.name,
      done: false,
      inProgress: false,
      notes: "",
    });

    this.readTasks();
  };

  updateTask = async (task) => {
    console.log("update task passed in ======> ", task);
    const tasksCol = collection(db, "tasks");

    const taskDoc = doc(tasksCol, task.id);

    await setDoc(taskDoc, {
      done: task.done,
      inProgress: task.inProgress,
      name: task.name,
    });

    this.readTasks();
  };

  deleteTask = async (id) => {
    const tasksCol = collection(db, "tasks");

    const taskDoc = doc(tasksCol, id);

    await deleteDoc(taskDoc);

    this.readTasks();
  };

  render() {
    return (
      <div className="columns-container">
        <TaskColumn
          tasks={this.state.tasks}
          addTask={this.addTask}
          updateTask={this.updateTask}
          deleteTask={this.deleteTask}
        />
        <InProgressColumn
          tasks={this.state.tasks}
          updateTask={this.updateTask}
          deleteTask={this.deleteTask}
        />
        <DoneColumn tasks={this.state.tasks} deleteTask={this.deleteTask} />
      </div>
    );
  }
}
