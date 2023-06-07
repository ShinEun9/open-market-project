import React from 'react';
import styles from './TextInputBox.module.css';
export default function TestInputBox(props) {
  return (
    <label className={styles['input-label']} htmlFor={props.id}>
      <input className={styles['input']} {...props} />
    </label>
  );
}
