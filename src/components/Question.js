import React from 'react';
import Answers from './Answers';
import styles from '../styles/Question.module.css'

const Question = () => {
  return (
    <div className={styles.question}>
      <div className={styles.qtitle}>
        <span className='material-icons-outlined'> help_outline </span>
        Here goes the question from Learn with Sumit?
      </div>
      <Answers />
    </div>
  );
};

export default Question;
