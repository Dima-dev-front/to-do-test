import React from "react";
import styles from "./user.module.scss";
import {user} from "../../state/DB-file";
import {VscSearch} from "react-icons/vsc";
import {IoIosArrowDown} from "react-icons/io";

const User = () => (
  <div className={styles.User}>
    <div className={styles.User__leftSide}>
      <img className={styles.User__leftSide_avatar}
           src={user.img}
           width={'35'}
           height={'35'}
      />
      <div className={styles.User__leftSide_accountInfo}>
        <p className={styles.name}>
          {user.name}{" "}
          <span className={styles.lastName}>{user.lastName}</span>
        </p>
        <div className={styles.emailContainer}>
          <p className={styles.email}>{user.email}</p>
          <div className={styles.arrowsContainer}>
            <IoIosArrowDown size={10}/>
            <IoIosArrowDown size={10}/>
          </div>
        </div>
      </div>
    </div>
    <VscSearch className={styles.User__search}/>
  </div>
);

export default User;
