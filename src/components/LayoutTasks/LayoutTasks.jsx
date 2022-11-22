import {Button} from "antd";
import React from "react";
import styles from "./layoutTasks.module.scss";
import {SlPeople} from "react-icons/sl";
import {BiDotsHorizontalRounded} from "react-icons/bi";

function LayoutTasks({title}) {
  return (
    <header className={styles.LayoutTasks}>
      <h2>{title}</h2>
      <div className={styles.LayoutTasks__buttonGroup}>
        <Button className={styles.LayoutTasks__buttonGroup_button}>
          <SlPeople/>
        </Button>
        <Button className={styles.LayoutTasks__buttonGroup_button}>
          <BiDotsHorizontalRounded/>
        </Button>
      </div>
    </header>
  );
}

export default LayoutTasks;
