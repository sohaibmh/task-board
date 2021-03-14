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
        <label htmlFor="id">ID</label>
        <input id="id" type="text" />
        <label htmlFor="title">Title</label>
        <input id="title" type="text" />
        <label htmlFor="description">Description</label>
        <input id="description" type="text" />
        <label htmlFor="board">Board</label>
        <input id="board" type="text" />
        <button className="submitButton" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewCard;
