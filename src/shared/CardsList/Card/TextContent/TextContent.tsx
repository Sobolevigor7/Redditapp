import React from 'react';
import styles from './textcontent.css';
import {UserLink} from "./UserLink";
import {Title} from "./Title";

interface Props {
    title: string;
    id: string;
    post: {};
}

export function TextContent({title, id, post}: Props) {
  return (
      <div className={styles.textContent}>
        <div className={styles.metaData}>
          <UserLink user = {'Дмитрий Гришин'}/>
          <span className={styles.createdAt}>
            <span className={styles.publishedLabel}>опубликовано </span>
            4 часа назад
          </span>
        </div>
        <Title title = {title} id ={id} post={post}/>
      </div>

  );
}
