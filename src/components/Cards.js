import React, { useState, useContext } from "react";
import { BoardsContext } from "../App";
import "./CSS/Cards.css";

const Cards = ({ currentCards }) => {
  console.log("currentCards...", currentCards);

  const onDragStart = (event, id) => {
    console.log("onDragStart: ", id);
    event.dataTransfer.setData("text/plain", id);
  };

  return (
    <>
      {currentCards.map((card) => {
        return (
          <div
            key={card.id}
            className="card"
            draggable
            onDragStart={(event) => onDragStart(event, card.id)}
          >
            Title: {card.title}
            <br />
            Description: {card.description}
          </div>
        );
      })}
    </>
  );
};

export default Cards;
