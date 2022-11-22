import React, {useEffect, useState} from "react";
import {defaultTasks, userTasks} from "../state/DB-file";
import {notification} from "antd";

export const ContextTasks = React.createContext();

const ContextProvider = ({children}) => {
  const [tasksData, setTasksData] = useState(
    sessionStorage.getItem("tasksData")
      ? JSON.parse(sessionStorage.getItem("tasksData"))
      : {
        default: defaultTasks,
        custom: userTasks,
      }
  );
  const [selectedList, setSelectedList] = useState({
    title: "My Day",
    type: "default",
  });

  useEffect(() => {
    return sessionStorage.setItem("tasksData", JSON.stringify(tasksData));
  });

  useEffect(() => {
    setSelectedList(
      tasksData[selectedList.type].find(
        (item) => item.title === selectedList.title
      )
    );
  }, [tasksData]);

  const updateImportantStatus = (task, list) => {
    setTasksData((prev) => {
      const updatedImportantList = {
        ...prev.default.find((item) => item.title === "Important"),
        tasks:
          prev.default
            .find((item) => item.title === "Important")
            ["tasks"].find((item) => item.title === task.title) ||
          task.important === true
            ? prev.default.find((item) => item.title === "Important")["tasks"]
            : [
              ...prev.default.find((item) => item.title === "Important")[
                "tasks"
                ],
              task,
            ],
      };
      if (list.type === "custom") {
        const updatedList = {
          ...prev.custom.find((item) => item.title === list.title),
          tasks: prev.custom
            .find((item) => item.title === list.title)
            ["tasks"].map((item) =>
            item.title === task.title
              ? {...item, important: !item.important}
              : item
          ),
        };
        const updatedDefaultList = prev.default.map((item) =>
          item.title === "Important" ? updatedImportantList : item
        );
        const updatedArrayOfLists = prev.custom.map((item) =>
          item.title === list.title ? updatedList : item
        );

        return {
          default: updatedDefaultList,
          custom: updatedArrayOfLists,
        };
      } else {
        const updatedList = {
          ...prev.default.find((item) => item.title === list.title),
          tasks: prev.default
            .find((item) => item.title === list.title)
            ["tasks"].map((item) =>
            item.title === task.title
              ? {...item, important: !item.important}
              : item
          ),
        };

        const updatedDefaultList = prev.default.map((item) =>
          item.title === list.title
            ? updatedList
            : item.title === "Important"
              ? updatedImportantList
              : item
        );
        return {
          default: updatedDefaultList,
          custom: prev.custom,
        };
      }
    });
  };

  const addNewTask = (title, list) => {
    setTasksData((prev) => {
      const updatedList = {
        ...prev[list.type].find((item) => item.title === list.title),
        tasks: [
          ...prev[list.type].find((item) => item.title === list.title)["tasks"],
          {title: title, important: false, completed: false},
        ],
      };
      const updatedArrayOfLists = prev[list.type].map((item) =>
        item.title === list.title ? updatedList : item
      );
      return {
        default: prev.default,
        custom: prev.custom,
        [list.type]: updatedArrayOfLists,
      };
    });
  };

  const openNotificationWithIcon = (type, message, description) => {
    notification[type]({
      message,
      description,
    });
  };

  const addCustomList = (title) => {
    setTasksData((prev) => {
      return {
        default: prev.default,
        custom: [...prev.custom, {title: title, type: 'custom', tasks: []}],
      };
    });
  };

  const removeCustomList = (title) => {
    setTasksData((prev) => {
      return {
        default: prev.default,
        custom: prev.custom.filter((list) => list.title != title),
      };
    });
  };

  const changeTaskStatus = (title, list) => {
    setTasksData((prev) => {
      const updatedList = {
        ...prev[list.type].find((item) => item.title === list.title),
        tasks: prev[list.type]
          .find((item) => item.title === list.title)
          ["tasks"].map((task) =>
          task.title === title
            ? {...task, completed: !task.completed}
            : task
        ),
      };
      const updatedArrayOfLists = prev[list.type].map((item) =>
        item.title === list.title ? updatedList : item
      );
      return {
        default: prev.default,
        custom: prev.custom,
        [list.type]: updatedArrayOfLists,
      };
    });
  };

  return (
    <ContextTasks.Provider value={{
      tasksData,
      setTasksData,
      selectedList,
      setSelectedList,
      addCustomList,
      openNotificationWithIcon,
      removeCustomList,
      changeTaskStatus,
      updateImportantStatus,
      addNewTask,
    }}
    >
      {children}
    </ContextTasks.Provider>
  );
};

export default ContextProvider;
