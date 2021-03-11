import React, { useState } from "react";
import "./TaskCard.css";

const TaskCard = ({ tasks, onDragStart }) => {
  return (
    <React.Fragment>
      {console.log("tasks", tasks)}
      {tasks.map((t) => {
        return (
          <div
            className="taskCard"
            draggable="true"
            onDragStart={(e) => onDragStart(e, t.id)}
          >
            Title: {t.title}
            <br />
            Description: {t.description}
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default TaskCard;
