import {Button, Input} from "antd";
import React, {useContext, useState} from "react";
import {ContextTasks} from "../../context/ContextTasks";
import {iconsMapping} from "../../assets/icon-assets/icons";
import styles from "./sectionItem.module.scss";
import {FiTrash2} from "react-icons/fi";

function SectionsItem({list, addNew}) {

  const [isEdit, setIsEdit] = useState(false);
  const [inputData, setInputData] = useState("");
  const [onError, setOnError] = useState(false);
  const [onHover, setOnHover] = useState(false);

  const {
    selectedList,
    setSelectedList,
    addCustomList,
    tasksData,
    removeCustomList,
  } = useContext(ContextTasks);

  const isSelected = list && selectedList.title === list.title;
  const titleStyle = `${styles.SectionsItem__leftSide_title} ${
    addNew && styles.addTitle
  } ${isSelected && styles.selectedListTitle}`;

  const sectionsItemStyle = `${styles.SectionsItem} ${
    isSelected && styles.selectedItem
  }`;

  const handleClick = (event) => {
    if (addNew && !isEdit) {
      setIsEdit(true);
    } else if (
      (event.target.farthestViewportElement &&
        event.target.farthestViewportElement.id === "delete") ||
      (event.target.id && event.target.id === "delete")
    ) {
      return;
    } else if (event.target.innerText === "Add" && isEdit) {
      setSelectedList({title: inputData, type: "custom", tasks: []});
    } else if (!onError) {
      setSelectedList(list);
    }
  };

  const handleChange = (e) => {
    setOnError(false);
    setInputData(e.target.value);
  };

  const handleAddNewList = () => {
    if (inputData.length > 0) {
      if (
        tasksData.custom.findIndex((list) => list.title === inputData) === -1
      ) {
        setIsEdit(false);
        addCustomList(inputData);
        setInputData("");
      } else {
        setOnError(true);
      }
    }
  };

  const handleRemoveList = () => {
    removeCustomList(list.title);
  };

  const handleCancel = () => {
    setInputData("");
    setIsEdit(false);
  };

  const isRemovable =
    onHover &&
    !addNew &&
    selectedList.title !== list.title &&
    tasksData.custom.some((customList) => customList.title === list.title);
  const icon = addNew
    ? iconsMapping["add"]
    : list.icon
      ? iconsMapping[list.icon]
      : isSelected
        ? iconsMapping["selected"]
        : iconsMapping["default"];

  const handleBlur = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      !onError && handleCancel();
    }
  };

  return (
    <div className={sectionsItemStyle}
         onClick={handleClick}
         onMouseEnter={() => setOnHover(true)}
         onMouseLeave={() => setOnHover(false)}
         onBlur={handleBlur}
    >
      <div className={styles.SectionsItem__leftSide}>
        {!isEdit && (
          <>
            {isRemovable ? (
              <FiTrash2
                color="#915858"
                onClick={handleRemoveList}
                id="delete"
              />
            ) : (
              icon
            )}{" "}
            <p className={titleStyle}>{addNew ? "New list" : list.title}</p>
          </>
        )}
      </div>
      {isEdit ? (
        <div className={styles.SectionsItem__inputGroup}>
          <Input autoFocus
                 onChange={handleChange}
                 value={inputData}
                 onPressEnter={handleAddNewList}
                 status={onError && "error"}
          />
          <Button onClick={handleAddNewList} id="add">
            Add
          </Button>
        </div>
      ) : (
        <p className={styles.SectionsItem__tasksQuantity}>
          {addNew ? iconsMapping["newList"] : list.tasks.length || ""}
        </p>
      )}
    </div>
  );
}

export default SectionsItem;
