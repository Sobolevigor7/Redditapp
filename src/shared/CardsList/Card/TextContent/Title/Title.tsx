import React from 'react';
import styles from './title.css';
import {Link, useLocation} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "../../../../../store/reducer";

interface Props {
    title: string;
    id: string;
    post: {};
}

export function Title({title, id, post}: Props) {

  return (
      <h2 className={styles.title}>
          <Link to={{pathname:`/posts/${id}`, state: {posts: post}}} className={styles.postLink}>
              {title}

          </Link>
      </h2>

  );
}
