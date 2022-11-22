import React, {useContext} from "react";
import {ContextTasks} from "../../context/ContextTasks";
import {user} from "../../state/DB-file";
import InputCustom from "../Input/InputCustom";
import ListTasks from "../ListTasks/ListTasks";
import LayoutTasks from "../LayoutTasks/LayoutTasks";
import styles from "./sectionTasks.module.scss";

function SectionTasks() {
  const {selectedList} = useContext(ContextTasks);
  return (
    <div className={styles.SectionTasks}
         style={{backgroundImage: `url(${user.defaultListBackground})`}}
    >
      <div className={styles.SectionTasks__container}>
        <div>
          <LayoutTasks title={selectedList.title}/>
          <ListTasks/>
        </div>
        <InputCustom/>
      </div>
    </div>
  );
}

export default SectionTasks;
