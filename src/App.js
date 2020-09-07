import React from "react";
import "./App.css";

function App() {
  return (
    <div className="mainContainer">
      <div className="boardsContainer">
        <div className="board-1">
          <div className="card-1" draggable>
            Name: Sohaib
            <br />
            Address: 250 Church Hill Road
          </div>
        </div>
        <div className="board-2"></div>
        <div className="board-3"></div>
        <div className="board-4"></div>
        <div className="board-5"></div>
      </div>
    </div>
  );
}

export default App;
