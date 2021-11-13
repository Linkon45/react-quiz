import React from "react";
import styles from "../styles/ProgressBar.module.css";
import Button from "./Button";
import { Link } from "react-router-dom";
const ProgressBar = ({ next, prev, progress,submit }) => {
  console.log("Progress", progress);
  return (
    <div className={styles.progressBar}>
      <div className={styles.backButton} onClick={prev}>
        <span className="material-icons-outlined"> arrow_back </span>
      </div>
      <div className={styles.rangeArea}>
        <div className={styles.tooltip}>{progress}% Complete!</div>
        <div className={styles.rangeBody}>
          <div
            className={styles.progress}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
      <Button
        className={styles.next}
        onClick={progress === 100 ? submit : next}
      >
        <span>Next Question</span>
        <span className="material-icons-outlined"> arrow_forward </span>
      </Button>
    </div>
  );
};

export default ProgressBar;
