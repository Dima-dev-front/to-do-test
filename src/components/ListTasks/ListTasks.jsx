import React, { useContext, useEffect, useState } from "react";
import { ContextTasks } from "../../context/ContextTasks";
import { ReactSortable } from "react-sortablejs";
import ItemTask from "../ItemTask/ItemTask";
import styles from "./listTasks.module.scss";
import { Button } from "antd";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

function ListTasks() {
  const { tasksData, selectedList, changeTaskStatus } = useContext(ContextTasks);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [pendingTasks, setPendingTasks] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);
  const tasksLength = completedTasks.length + pendingTasks.length;
  useEffect(() => {
    if (
      tasksData[selectedList.type].find(
        (item) => item.title === selectedList.title
      )
    ) {
      setCompletedTasks(
        tasksData[selectedList.type]
          .find((list) => list.title === selectedList.title)
          ["tasks"].filter((task) => task.completed)
      );
      setPendingTasks(
        tasksData[selectedList.type]
          .find((list) => list.title === selectedList.title)
          ["tasks"].filter((task) => !task.completed)
      );
    }
  }, [selectedList, tasksData]);
  useEffect(() => {
    if (completedTasks.length === 0) {
      setShowCompleted(false);
    }
  }, [completedTasks]);
  const toggleShowCompleted = () => {
    if (!showCompleted && completedTasks.length > 0) {
      setShowCompleted(true);
    } else {
      setShowCompleted(false);
    }
  };

  const sortableOptions = {
    animation: 150,
    fallbackOnBody: true,
    swapThreshold: 0.2,
    ghostClass: "ghost",
    group: "shared",
    forceFallback: true,
  };
  return (
    <div className={styles.ListsTasks}>
      <div className={styles.ListsTasks__section} id="pending">
        <ReactSortable
          group={{ name: "pendingTasks", put: true, pull: true }}
          list={pendingTasks}
          setList={setPendingTasks}
          onAdd={(event) => {
            changeTaskStatus(event.clone.outerText, selectedList);
          }}
          sort={true}
          {...sortableOptions}
        >
          {pendingTasks.map((task, index) => {
            return <ItemTask task={task} key={index} />;
          })}
        </ReactSortable>
      </div>
      {tasksLength !== 0 && (
        <Button
          className={styles.ListsTasks__completedButton}
          onClick={toggleShowCompleted}
          disabled={completedTasks.length === 0}
        >
          {!showCompleted ? <IoIosArrowForward /> : <IoIosArrowDown />}
          <span className={styles.completed}>Completed</span>
          <span className={styles.completed}>
            {completedTasks.length > 0 ? completedTasks.length : ""}
          </span>
        </Button>
      )}

      {showCompleted && <div className={styles.ListsTasks__section} id="completed">
        <ReactSortable
          group={{name: "completedTasks", put: true, pull: true}}
          list={completedTasks}
          setList={setCompletedTasks}
          onAdd={(event) => {
            changeTaskStatus(event.clone.outerText, selectedList);
          }}
          sort={true}
          {...sortableOptions}
        >
          {showCompleted &&
          completedTasks.map((task, index) => {
            return <ItemTask task={task} key={index}/>;
          })}
        </ReactSortable>
      </div>}
    </div>
  );
}

export default ListTasks;
