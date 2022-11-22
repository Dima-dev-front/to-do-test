import React from "react";
import { HiOutlineSun } from "react-icons/hi";
import { MdStar, MdStarOutline } from "react-icons/md";
import {
  VscCalendar,
  VscHome,
  VscMenu,
  VscNewFolder,
  VscAdd,
} from "react-icons/vsc";
import { BsPerson } from "react-icons/bs";

export const iconsMapping = {
  sun: <HiOutlineSun color="#546671" size={25} />,
  star: <MdStarOutline color="#AC395D" size={25} />,
  calendar: <VscCalendar color="#166F6B" size={25} />,
  person: <BsPerson color="#1E704D" size={25} />,
  home: <VscHome color="#5C70BE" size={25}/>,
  default: <VscMenu color="#5C70BE" size={25} style={{ marginTop: "-2px" }} />,
  selected: (
    <VscMenu
      color="#546671"
      size={25}
      style={{ strokeWidth: "0.5", marginTop: "-2px" }}
    />
  ),
  add: <VscAdd color="#A8A9A9" size={25} style={{ strokeWidth: "0.8" }} />,
  newList: <VscNewFolder size={25} style={{ marginRight: "-7px" }} />,
  taskStarFilled: <MdStar color="#737373" size={25} />,
  taskStarOutline: <MdStarOutline color="#737373" size={25} />,
  addTask: <VscAdd color="#fff" size={25} style={{ strokeWidth: "0.8" }} />,
};
