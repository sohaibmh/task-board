import React, { useState, useContext } from "react";
import { ColumnsContext } from "../App";
import "./CSS/Tasks.css";

const Tasks = ({ currentTasks }) => {
  console.log("debug1 currentTasks", currentTasks);

  const onDragStart = (event, id) => {
    console.log("onDragStart: ", id);
    event.dataTransfer.setData("text/plain", id);
  };

  return (
    <>
      {currentTasks.map((task) => {
        return (
          <div
            key={task.id}
            className="card"
            draggable
            onDragStart={(event) => onDragStart(event, task.id)}
          >
            Title: {task.title}
            <br />
            Description: {task.description}
          </div>
        );
      })}
    </>
  );
};

export default Tasks;
