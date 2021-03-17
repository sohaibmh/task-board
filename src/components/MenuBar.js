import React, { useState, useRef, useEffect } from "react";
import "./CSS/MenuBar.css";
import NewTask from "./NewTask";
import NewColumn from "./NewColumn";

const MenuBar = () => {
  const [expandOptions, setExpandOptions] = useState(false);
  const [showNewColumnForm, setShowNewColumnForm] = useState(false);
  const [showNewTaskForm, setShowNewTaskForm] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const handleClickOutside = (event) => {
    const { current: wrap } = wrapperRef;
    if (wrap && !wrap.contains(event.target)) {
      setExpandOptions(false);
      setShowNewColumnForm(false);
      setShowNewTaskForm(false);
    }
  };

  const options = () => {
    return (
      <>
        <div className="options">
          {showNewTaskForm ? null : (
            <button
              className="menuBarButtons"
              onClick={() => setShowNewColumnForm(!showNewColumnForm)}
            >
              Create New Column
            </button>
          )}

          {showNewColumnForm ? <NewColumn /> : null}
          {showNewColumnForm ? null : (
            <button
              className="menuBarButtons"
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
      <div className="menuBar" ref={wrapperRef}>
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
