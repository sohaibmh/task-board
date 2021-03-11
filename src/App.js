import React, { useState, createContext } from "react";
import "./App.css";
import Columns from "./components/Columns";
import MenuBar from "./components/MenuBar";

export const TasksContext = createContext();
export const ColumnsContext = createContext();

function App() {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "Cooking",
      description: "Make a pizza",
      column: "To Do",
    },
    {
      id: "2",
      title: "Shopping",
      description: "Buy ice cream",
      column: "To Do",
    },
    {
      id: "3",
      title: "Reading",
      description: "Read a book",
      column: "To Do",
    },
  ]);

  const [columns, setColumns] = useState([
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
    <TasksContext.Provider value={[tasks, setTasks]}>
      <ColumnsContext.Provider value={[columns, setColumns]}>
        <div className="mainContainer">
          <MenuBar />
          <div className="columnsContainer">
            <Columns />
          </div>
        </div>
      </ColumnsContext.Provider>
    </TasksContext.Provider>
  );
}

export default App;
