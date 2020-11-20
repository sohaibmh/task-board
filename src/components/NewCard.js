import React, { useState, useContext } from "react";
import { CardsContext } from "../App";

const NewCard = () => {
  const [cards, setCards] = useContext(CardsContext);

  console.log("cards....", cards);

  const handleSubmit = (event) => {
    event.preventDefault();
    const title = event.target.elements.title.value;
    const description = event.target.elements.description.value;
    const id = event.target.elements.id.value;
    const board = event.target.elements.board.value;
    setCards((prevCards) => [...prevCards, { title, description, id, board }]);
  };

  return (
    <>
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
    </>
  );
};

export default NewCard;
