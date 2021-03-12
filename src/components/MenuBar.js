import React, { useState } from "react";
import "./CSS/MenuBar.css";
import NewTask from "./NewTask";
import NewColumn from "./NewColumn";

const MenuBar = () => {
  const [expandOptions, setExpandOptions] = useState(false);
  const [showNewColumnForm, setShowNewColumnForm] = useState(false);
  const [showNewTaskForm, setShowNewTaskForm] = useState(false);

  const options = () => {
    return (
      <>
        <div className="options">
          {showNewTaskForm ? null : (
            <button
              className="menuBarButton"
              onClick={() => setShowNewColumnForm(!showNewColumnForm)}
            >
              Create New Column
            </button>
          )}

          {showNewColumnForm ? <NewColumn /> : null}
          {showNewColumnForm ? null : (
            <button
              className="menuBarButton"
              onClick={() => setShowNewTaskForm(!showNewTaskForm)}
            >
              Create New Task
            </button>
          )}

          {showNewTaskForm ? <NewTask /> : null}
        </div>
      </>
    );
  };

  return (
    <>
      <div className="menuBar">
        <button
          className="optionsButton"
          onClick={() => setExpandOptions(!expandOptions)}
        >
          Options
        </button>
        {expandOptions ? <div className="optionsCard"> {options()}</div> : null}
      </div>
    </>
  );
};

export default MenuBar;
