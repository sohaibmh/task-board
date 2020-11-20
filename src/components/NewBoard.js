import React, { useState, useContext } from "react";
import { BoardsContext } from "../App";

const NewBoard = () => {
  const [boards, setBoards] = useContext(BoardsContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const id = event.target.elements.id.value;
    const name = event.target.elements.name.value;
    const backgroundColour = event.target.elements.backgroundColour.value;
    setBoards((prevBoards) => [
      ...prevBoards,
      { title: id, name, backgroundColour },
    ]);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        New Board
        <div>
          <label htmlFor="id">ID: </label>
          <input id="id" type="text" />
        </div>
        <div>
          <label htmlFor="name">Name: </label>
          <input id="name" type="text" />
        </div>
        <div>
          <label htmlFor="backgroundColour">Background Colour: </label>
          <input id="backgroundColour" type="text" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default NewBoard;
