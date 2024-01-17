import React, { useEffect } from "react";
import { useGlobalContext } from "./context";


const Alert = ({ msg }) => {
  const { tasks, refContainer, alert, showAlert } = useGlobalContext();
//basically displays alert that slides into view from left or hides
  useEffect(() => {
    //refContainer.current is used to access the underlying DOM element of the p tag
    refContainer.current.style.left = `${alert.show ? "15px" : "-100%"}`;

    //slides out of view after 4sec
    const timeout = setTimeout(() => {
      refContainer.current.style.left = "-100%";
      showAlert(false, alert.msg);
    }, 4000);

    return () => clearTimeout(timeout);
  }, [alert, refContainer, showAlert, tasks]);
  return (
    <p ref={refContainer} className='alert'>
      {msg}
    </p>
  );
};

export default Alert;
