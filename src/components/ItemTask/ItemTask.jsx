import React, { useContext, useState } from "react";
import { ContextTasks } from "../../context/ContextTasks";
import { iconsMapping } from "../../assets/icon-assets/icons";
import styles from "./itemTask.module.scss";

function ItemTask({ task }) {
  const { title, completed, important } = task;
  const { selectedList, changeTaskStatus, updateImportantStatus } =
    useContext(ContextTasks);
  const icon = important
    ? iconsMapping.taskStarFilled
    : iconsMapping.taskStarOutline;
  return (
    <div
      className={styles.Item}
      style={{ backgroundColor: completed && "rgba(37, 37, 37, 0.723)" }}
    >
      <input
        type="checkbox"
        onChange={() => changeTaskStatus(title, selectedList)}
        checked={completed}
        className={styles.Item__completed}
      />
      <p
        className={styles.Item__title}
        style={{
          color: completed && "white",
        }}
      >
        {title}
      </p>
      <div
        className={styles.Item__icon}
        onClick={() =>
          selectedList.title != "Important" &&
          updateImportantStatus(task, selectedList)
        }
      >
        {icon}
      </div>
    </div>
  );
}

export default ItemTask;
