import React from 'react';
import styles from '../styles/Answers.module.css';
import Checkbox from './Checkbox';

const Answers = () => {
  return (
    <div className={styles.answers}>
      <Checkbox className={styles.answer} text='Test Answer' />
    </div>
  );
};

export default Answers;
