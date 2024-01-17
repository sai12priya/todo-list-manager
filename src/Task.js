import React, { useState, useEffect } from "react";
import { Draggable } from "react-beautiful-dnd";
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdDeleteOutline,
} from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { useGlobalContext } from "./context";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { IoStatsChartOutline } from "react-icons/io5";

const Task = ({ id, name, completed, index }) => {
  const { removeTask, toggleDone, editTask, tasks, setTasks } = useGlobalContext();
  const [manualProgress, setManualProgress] = useState(0);

  useEffect(() => {
    // Update manual progress when completed status changes externally
    setManualProgress(completed ? 100 : 0);
  }, [completed]);

  const handleManualProgress = () => {
    if (!completed && manualProgress < 100) {
      // If the task is uncompleted, set progress to 25%, 50%, 75%, and finally 100%
      const newProgress = Math.min(manualProgress + 25, 100);
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === id ? { ...task, completed: newProgress === 100 } : task
        )
      );
      setManualProgress(newProgress);
    }
  };

  return (
    <Draggable key={id} draggableId={"draggable-" + id} index={index}>
      {(provided, snapshot) => (
        <li
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={{
            ...provided.draggableProps.style,
            boxShadow: snapshot.isDragging ? "0 0 5rem #666" : "none",
            opacity: snapshot.isDragging
              ? "1"
              : provided.draggableProps.style.opacity,
          }}
          className={`task ${completed && "task-done"}`}
        >
          <div className="progress-container" style={{ width: "40px", height: "40px" }}>
            <CircularProgressbar
              value={manualProgress}
              text={`${manualProgress}%`}
              styles={buildStyles({
                textSize: "35px",
                pathColor: "black",
                textColor: "var(--font-color)",
                trailColor: "#d6d6d6",
                strokeWidth:10,
              })}
              
            />
          </div>
          <p>{name}</p>
          <button onClick={() => toggleDone(id)}>
            {completed ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
          </button>
          <button onClick={() => removeTask(id)}>
            <MdDeleteOutline />
          </button>
          <button onClick={() => editTask(id)}>
            <FiEdit />
          </button>
          <button onClick={handleManualProgress}>
            <IoStatsChartOutline /> {/* Chart Growth icon */}
          </button>
        </li>
      )}
    </Draggable>
  );
};

export default Task;
