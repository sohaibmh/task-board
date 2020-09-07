import React, { useState } from "react";
import "./App.css";
import TaskCard from "./components/TaskCard";

function App() {
  let tasksData = [
    {
      id: 1,
      title: "Driving",
      description: "Book your practical driving test.",
      taskLane: "In progress",
    },

    {
      id: 2,
      title: "Gym",
      description: "Go to gym today",
      taskLane: "In progress",
    },

    {
      id: 3,
      title: "Reading",
      description: "Read at least 5 pages today",
      taskLane: "Initialised",
    },
  ];

  const [tasks, setTasks] = useState(tasksData);

  const onDragStart = (e, id) => {
    console.log("onDragStart: ", id);
    e.dataTransfer.setData("text/plain", id);
  };

  const onDrop = (e, title) => {
    let id = e.dataTransfer.getData("text/plain");

    console.log("Dropped..", title);

    let updatedTasks = tasks.map((task) => {
      if (task.id == id) {
        task.taskLane = title;
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  const taskCategories = {
    Initialised: [],
    "In progress": [],
  };

  tasks.forEach((c) => taskCategories[c.taskLane].push(c));

  return (
    <div className="mainContainer">
      {console.log(taskCategories["Initialised"])}
      {console.log(taskCategories["In progress"])}
      <div className="boardsContainer">
        <div
          className="board-1"
          onDragOver={onDragOver}
          onDrop={(e) => onDrop(e, "Initialised")}
        >
          <TaskCard
            tasks={taskCategories["Initialised"]}
            onDragStart={onDragStart}
          />
        </div>
        <div
          className="board-2"
          onDragOver={onDragOver}
          onDrop={(e) => onDrop(e, "In progress")}
        >
          <TaskCard
            tasks={taskCategories["In progress"]}
            onDragStart={onDragStart}
          />
        </div>
        <div className="board-3" onDragOver={onDragOver} onDrop={onDrop}></div>
        <div className="board-4" onDragOver={onDragOver} onDrop={onDrop}></div>
        <div className="board-5" onDragOver={onDragOver} onDrop={onDrop}></div>
      </div>
    </div>
  );
}

export default App;
