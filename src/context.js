import React, { useState, useContext, useRef } from "react";

// retrieving data from local storage
const getTasks = () => {
  const tasks = localStorage.getItem("tasks");
  return tasks ? JSON.parse(tasks) : [];
};

//creating new context object
const AppContext = React.createContext(null);

//app provider serves as provider to context
//child compos wrapped in this
//declared and initialised
const AppProvider = ({ children }) => {
  const inputRef = useRef(null);
  const [tasks, setTasks] = useState(getTasks());
  const [alert, setAlert] = useState({ show: false, msg: "" });
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [name, setName] = useState("");
  const [filter, setFilter] = useState("all");
  const refContainer = useRef(null);

  //removes task with specific id
  //triggers alert
  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    showAlert(true, "Task Removed.");
  };

  //toggles completion state of task
  //triggers alert
  const toggleDone = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
    showAlert(true, "Task State Changed.");
  };

  //extracts name with specific id using find
  //updating state
  //focusses on input field and makes it ready for user to edit
  const editTask = (id) => {
    const { name } = tasks.find((task) => task.id === id);
    setIsEditing(true);
    setEditId(id);
    setName(name);
    inputRef.current.focus();
  };

  //updates alert state with params
  const showAlert = (show, msg) => {
    setAlert({ show, msg });
  };

  

  return (
    <AppContext.Provider
      value={{
        tasks,
        setTasks,
        removeTask,
        toggleDone,
        refContainer,
        alert,
        showAlert,
        isEditing,
        setIsEditing,
        editId,
        setEditId,
        editTask,
        name,
        setName,
        getTasks,
        filter,
        setFilter,
        inputRef,
        
      }}
    >
      {children}
    </AppContext.Provider>
  );
};//children rendered inside provider

const useGlobalContext = () => {
  return useContext(AppContext);//access values,funcs
};

export { AppContext, AppProvider, useGlobalContext };
