import React, { useState, useContext } from "react";
import { ColumnsContext } from "../App";
import "./CSS/NewColumn.css";

const NewColumn = () => {
  const [columns, setColumns] = useContext(ColumnsContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const id = event.target.elements.id.value;
    const name = event.target.elements.name.value;
    const backgroundColour = event.target.elements.backgroundColour.value;
    setColumns((prevColumns) => [
      ...prevColumns,
      { title: id, name, backgroundColour },
    ]);
  };

  return (
    <div className="newColumnForm">
      <form onSubmit={handleSubmit}>
        <label htmlFor="id">ID </label>
        <input id="id" type="text" />

        <label htmlFor="name">Name</label>
        <input id="name" type="text" />

        <label htmlFor="backgroundColour">Background Colour </label>
        <input type="color" id="backgroundColour" />

        <button className="submitButton" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewColumn;
