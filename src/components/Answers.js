import React from 'react';
import styles from '../styles/Answers.module.css';
import Checkbox from './Checkbox';

const Answers = ({options=[],handleChange}) => {
  return (
    <div className={styles.answers}>
      {options.map((option,index) => (
        <Checkbox className={styles.answer}
        text={option.title}
        value={index}
        checked={option.checked}
        onChange={(e) => handleChange(e,index)}
        />
      ))}
    </div>
  );
};

export default Answers;
