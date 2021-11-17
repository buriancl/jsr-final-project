import React from "react";
import DoneColumn from "./components/DoneColumn";
import InProgressColumn from "./components/InProgressColumn";
import Navbar from "./components/Navbar";
import TaskColumn from "./components/TaskColumn";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  doc,
  deleteDoc,
  setDoc,
} from "firebase/firestore";

import "./App.css";

const firebaseConfig = {
  apiKey: "AIzaSyCJnRfGVlOZKA4ZI4_xFR_HVVNsR6lnVBA",
  authDomain: "jsr-914-final-project.firebaseapp.com",
  projectId: "jsr-914-final-project",
  storageBucket: "jsr-914-final-project.appspot.com",
  messagingSenderId: "240040456384",
  appId: "1:240040456384:web:d2646411ba96e6b0a53d25",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default class App extends React.Component {
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
      <div className="App">
        <Navbar />
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
      </div>
    );
  }
}
