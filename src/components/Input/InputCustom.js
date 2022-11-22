import {Button, Input} from "antd";
import React, {useContext, useState} from "react";
import {ContextTasks} from "../../context/ContextTasks";
import {iconsMapping} from "../../assets/icon-assets/icons";
import styles from "./inputCustom.module.scss";

const InputCustom = () => {

  const [isEdit, setIsEdit] = useState(false);
  const [inputData, setInputData] = useState("");
  const [onError, setOnError] = useState(false);
  const {selectedList, openNotificationWithIcon, addNewTask} = useContext(ContextTasks);


  const handleBlur = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      !onError && handleCancel();
    }
  };

  const handleCancel = () => {
    setInputData("");
    setIsEdit(false);
  };

  const handleAddNewTask = () => {
    if (inputData.length > 0) {
      if (
        selectedList.tasks.length === 0 ||
        !selectedList.tasks.find((task) => task.title === inputData)
      ) {
        setIsEdit(false);
        addNewTask(inputData, selectedList);
        setInputData("");
      } else {
        setOnError(true);
        openNotificationWithIcon(
          "error",
          "Can't create new task",
          "Task with this description already exists"
        );
      }
    }
  };

  const handleChange = (e) => {
    setOnError(false);
    setInputData(e.target.value);
  };

  return (
    <div className={styles.Input}
         onClick={()=>setIsEdit(!isEdit)}
         onBlur={handleBlur}
    >
      {isEdit ? (
        <>
          <Button className={styles.Input__button}
                  onClick={handleAddNewTask}
          />
          <Input autoFocus
                 onChange={handleChange}
                 value={inputData}
                 onPressEnter={handleAddNewTask}
                 status={onError && "error"}
                 placeholder="Type text"
                 className={styles.Input__input}
          />
        </>
      ) : (
        <>
          {iconsMapping["addTask"]}
          <p>Add a task. Type @ to assign it to someone.</p>
        </>
      )}
    </div>
  );
};

export default InputCustom;
