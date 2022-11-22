import React from "react";
import User from "../UserInfo/User";
import Sections from "../MenuSections/Sections";
import styles from "./sidebar.module.scss";

function Sidebar() {
  return (
    <div className={styles.Sidebar}>
      <p className={styles.title}>Microsoft To Do</p>
      <User/>
      <Sections/>
    </div>
  );
}

export default Sidebar;
