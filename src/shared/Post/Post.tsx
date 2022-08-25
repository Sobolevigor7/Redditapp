import React, {useEffect, useRef, useState} from 'react';
import styles from './post.css';
import ReactDOM from "react-dom";

import {CommentsList} from "../CommentsList";
import {CommentFormContainer} from "../CommentFormContainer";
import {useHistory} from "react-router-dom";
import {EIcons, Icon} from "../Icon";

export function Post(post: any) {
    const [isPostExist, setIsPostExist] = useState(true)
    const [title, setTitle] = useState('');
    const [selftext, setText] = useState('');


  const ref = useRef<HTMLDivElement>(null);
  const history = useHistory();


  useEffect(() => {
      if (!post.post)  {
          setIsPostExist(false);
      }
      if (post.post) {
        setTitle(post.post.posts.data.title);
        setText(post.post.posts.data.selftext)
    }
  }, []);

  useEffect(() =>{
    function handleClick(event: MouseEvent  ) {
      if (event.target instanceof Node && !ref.current?.contains(event.target)) {
        //props.onClose?.();
         history.push('/posts/');
      }
    }
    document.addEventListener('click', handleClick)
    return () => {
      document.removeEventListener('click', handleClick);
    }
  }, []);
  const node = document.querySelector('#modal_root');
  if(!node) return null;

    return ReactDOM.createPortal( (
    <div className={styles.modal} ref={ref}>
        {isPostExist &&(
            <div>
            <h2>{title}</h2>

            <div className={styles.content}>
        {selftext}
            </div>

            <CommentFormContainer />
            <div className={styles.divider}></div>

            <CommentsList/>
            </div>
        )}

        {!isPostExist && (
            <div>
                <h2>Запрошенный пост не существует</h2>
                <Icon icon={EIcons.smile} size = {55} className={styles.icon} />


            </div>
                )}


    </div>
      ),  node);
}
