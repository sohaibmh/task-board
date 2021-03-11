import React, { useState, useContext } from "react";
import { TasksContext } from "../App";
import "./CSS/NewTask.css";

const NewCard = () => {
  const [tasks, setTasks] = useContext(TasksContext);

  console.log("tasks....", tasks);

  const handleSubmit = (event) => {
    event.preventDefault();
    const title = event.target.elements.title.value;
    const description = event.target.elements.description.value;
    const id = event.target.elements.id.value;
    const column = event.target.elements.board.value;
    setTasks((prevTasks) => [...prevTasks, { title, description, id, column }]);
  };

  return (
    <div className="newTaskForm">
      <form onSubmit={handleSubmit}>
        New Card
        <div>
          <label htmlFor="id">ID: </label>
          <input id="id" type="text" />
        </div>
        <div>
          <label htmlFor="title">Title: </label>
          <input id="title" type="text" />
        </div>
        <div>
          <label htmlFor="description">Description: </label>
          <input id="description" type="text" />
        </div>
        <div>
          <label htmlFor="board">Board: </label>
          <input id="board" type="text" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewCard;
