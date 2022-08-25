import React from 'react';
import styles from './userlink.css';
import image from '../../../../../assets/userAvatar.png';

interface IUserLink {
    user?:  string
}

export function UserLink(userName: IUserLink) {
    const {user} = userName
    let imagePath = image;
    if (!imagePath.startsWith('/static')) { //Проверяю правильность пути
        imagePath = '/static/'.concat(imagePath);
    }
  return (
      <div className={styles.userLink}>
        <img className={styles.avatar} src = {imagePath}  alt="user avatar"/>
        <a href="#user-url" className={styles.username}>{user}</a>
      </div>

  );
}
