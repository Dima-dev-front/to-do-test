import React, { useContext } from "react";
import { defaultTasks } from "../../state/DB-file";
import SectionsItem from "../SectionsItem/SectionsItem";
import styles from "./sections.module.scss";
import { ContextTasks } from "../../context/ContextTasks";

function Sections() {
  const { tasksData } = useContext(ContextTasks);
  return (
    <div className={styles.Sections}>
      {tasksData.default.map((defaultList, index) => {
        return <SectionsItem list={defaultList} key={index} />;
      })}
      <div className={styles.Sections__separator} />
      {tasksData.custom.length > 0 &&
        tasksData.custom.map((customList, index) => {
          return <SectionsItem list={customList} key={index} />;
        })}
        <SectionsItem addNew/>
    </div>
  );
}

export default Sections;
