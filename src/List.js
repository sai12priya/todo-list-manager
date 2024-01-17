import React from "react";
import { Droppable } from "react-beautiful-dnd";
import { useGlobalContext } from "./context";
import Task from "./Task";

//filters the tasks as all,compl,uncompl
const List = () => {
  const { tasks, filter } = useGlobalContext();
  //copying tasks array
  //without disturbing original
  let filtred = [...tasks];

  switch (filter) {
    case "all":
      filtred = [...tasks];
      break;
    case "completed":
      filtred = tasks.filter((task) => task.completed);
      break;
    case "uncompleted":
      filtred = tasks.filter((task) => !task.completed);
      break;
    default:
      filtred = [...tasks];
      break;
  }

  return (
     //uniqueid
    <Droppable droppableId='droppable-1'>
      {(provided, snapshot) => (//params
        <ul
          className='tasks-wrapper'
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {filtred.map((task, i) => (
            <Task key={task.id} {...task} index={i} />
          ))}
          {provided.placeholder}
        </ul>
      )}
    </Droppable>
  );
};

export default List;
