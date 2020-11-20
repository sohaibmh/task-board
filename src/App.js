import React, { useState, createContext } from "react";
import "./App.css";
import NewCard from "./components/NewCard";
import NewBoard from "./components/NewBoard";
import Boards from "./components/Boards";

export const CardsContext = createContext();
export const BoardsContext = createContext();

function App() {
  const [cards, setCards] = useState([
    {
      id: "1",
      title: "Cooking",
      description: "Make a pizza",
      board: "To Do",
    },
    {
      id: "2",
      title: "Shopping",
      description: "Buy ice cream",
      board: "To Do",
    },
  ]);

  const [boards, setBoards] = useState([
    {
      id: "1",
      name: "To Do",
      backgroundColour: "#ABC8C0",
    },

    {
      id: "2",
      name: "In Progress",
      backgroundColour: "#427AA1",
    },

    {
      id: "3",
      name: "Completed",
      backgroundColour: "#1B998B",
    },
  ]);

  return (
    <CardsContext.Provider value={[cards, setCards]}>
      <BoardsContext.Provider value={[boards, setBoards]}>
        <div className="mainContainer">
          <NewCard />
          <NewBoard />
          <div className="boardsContainer">
            <Boards />
          </div>
        </div>
      </BoardsContext.Provider>
    </CardsContext.Provider>
  );
}

export default App;
