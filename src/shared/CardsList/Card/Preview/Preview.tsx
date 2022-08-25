import React from 'react';
import styles from './preview.css';


export function Preview() {

  return (
      <div className={styles.preview}>
        <img className={styles.previewImg} src = {"https://cdn.dribbble.com/userupload/3111182/file/original-98a75c98020f256665161cf868cb8e29.jpg?compress=1&resize=400x300&vertical=top"} alt="preview Image"/>
      </div>

  );
}
