import React, { useState, useContext } from "react";
import { ColumnsContext, TasksContext } from "../App";
import Tasks from "./Tasks";
import "./CSS/Columns.css";

const Columns = () => {
  const [columns, setColumns] = useContext(ColumnsContext);
  const [tasks, setTasks] = useContext(TasksContext);

  console.log("Tasks2... ", tasks);
  console.log("Columns2... ", columns);

  const filteredTasks = (columnName) => {
    console.log("debug tasks2", tasks);
    return tasks.filter((card) => {
      return card.column?.toLowerCase() === columnName.toLowerCase();
    });
  };

  const reArrangeTasks = (task) => {
    // Fix this
    const index = tasks.indexOf(task);
    if (index > -1) {
      tasks.splice(index, 1);
    }

    console.log("debug index", index);

    console.log("debug task1", task);
    tasks.splice(0, 0, task);
    const reArrangedTasks = tasks;
    console.log("debug reArrangedTasks", reArrangedTasks);
    return [...reArrangedTasks];
  };

  const onDragOver = (event) => {
    event.preventDefault();
  };

  function onDrop(event, column) {
    let id = event.dataTransfer.getData("text/plain");

    let tasksRearranged = false;

    let updatedTasks = tasks.map((task) => {
      if (task.id === id && task.column === column) {
        tasksRearranged = true;
        setTasks(reArrangeTasks(task));
      } else if (task.id === id) {
        task.column = column;
      }
      return task;
    });

    console.log("debug updatedTasks", updatedTasks);
    console.log("debug tasksRearranged", tasksRearranged);
    console.log("debug tasks", tasks);

    if (!tasksRearranged) {
      setTasks(updatedTasks);
    }
  }

  return (
    <>
      {columns.map((column) => {
        return (
          <div
            key={column.id}
            onDragOver={onDragOver}
            onDrop={(event) => onDrop(event, column.name.toLowerCase())}
            className="column"
            style={{ backgroundColor: `${column.backgroundColour}` }}
          >
            <h2 className="columnName">{column.name.toUpperCase()}</h2>
            <Tasks currentTasks={filteredTasks(column.name)} />
          </div>
        );
      })}
    </>
  );
};
export default Columns;
