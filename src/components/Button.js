import React from 'react';
import styles from '../styles/Button.module.css';

const Button = ({ text }) => {
  return (
    <div className={styles.button}>
      <span>{text}</span>
    </div>
  );
};

export default Button;
