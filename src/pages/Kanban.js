import React, { useState, useEffect } from "react";
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

const Kanban = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    readTasks();
  }, []);

  const readTasks = async () => {
    const tasksCol = collection(db, "tasks");
    const tasksSnapshot = await getDocs(tasksCol);
    const taskList = [];
    tasksSnapshot.forEach((task) => {
      const eachTask = {
        id: task.id,
        name: task.data().name,
        count: task.data().count,
        // done: task.data().done,
        // inProgress: task.data().inProgress,
        notes: task.data().notes,
      };
      taskList.push(eachTask);
    });

    setTasks(taskList);
  };

  const addTask = async (newTask) => {
    const tasksCol = collection(db, "tasks");

    await addDoc(tasksCol, {
      name: newTask.name,
      count: 1,
      // done: false,
      // inProgress: false,
      notes: "",
    });

    readTasks();
  };

  const updateTask = async (id, count, name, notes) => {
    const tasksCol = collection(db, "tasks");

    const taskDoc = doc(tasksCol, id);

    await setDoc(taskDoc, {
      id,
      count,
      // done,
      // inProgress,
      name,
      notes,
    });

    readTasks();
  };

  const deleteTask = async (id) => {
    const tasksCol = collection(db, "tasks");

    const taskDoc = doc(tasksCol, id);

    await deleteDoc(taskDoc);

    readTasks();
  };

  return (
    <div className="kanbanContainer">
      <div className="columns-container">
        <TaskColumn
          tasks={tasks}
          addTask={addTask}
          updateTask={updateTask}
          deleteTask={deleteTask}
        />
        <InProgressColumn
          tasks={tasks}
          updateTask={updateTask}
          deleteTask={deleteTask}
        />
        <DoneColumn
          tasks={tasks}
          deleteTask={deleteTask}
          updateTask={updateTask}
        />
      </div>
    </div>
  );
};

export default Kanban;
