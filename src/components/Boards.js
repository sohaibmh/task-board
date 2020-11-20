import React, { useState, useContext } from "react";
import { BoardsContext, CardsContext } from "../App";
import Cards from "./Cards";
import "./CSS/Boards.css";

const Boards = () => {
  const [boards, setBoards] = useContext(BoardsContext);
  const [cards, setCards] = useContext(CardsContext);

  console.log("cards2... ", cards);
  console.log("boards2... ", boards);

  const filteredCards = (boardName) => {
    return cards.filter((card) => {
      return card.board.toLowerCase() === boardName.toLowerCase();
    });
  };

  const onDragOver = (event) => {
    event.preventDefault();
  };

  const onDrop = (event, board) => {
    let id = event.dataTransfer.getData("text/plain");

    let updatedTasks = cards.map((card) => {
      if (card.id === id) {
        card.board = board;
      }
      return card;
    });
    setCards(updatedTasks);
  };

  return (
    <>
      {boards.map((board) => {
        return (
          <div
            onDragOver={onDragOver}
            onDrop={(event) => onDrop(event, board.name.toLowerCase())}
            className="board"
            style={{ backgroundColor: `${board.backgroundColour}` }}
          >
            <h2 className="boardName">{board.name.toUpperCase()}</h2>
            <Cards currentCards={filteredCards(board.name)} />
          </div>
        );
      })}
    </>
  );
};
export default Boards;
