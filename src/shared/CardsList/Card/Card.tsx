import React from 'react';
import styles from './card.css';
import {TextContent} from "./TextContent";
import {Preview} from "./Preview";
import {Menu} from "./Menu";
import {Controls} from "./Controls";

interface Props {
  title: string;
  id: string;
  post: {}
}

export function Card({title, id, post}: Props) {

  return (
  <li className={styles.card}>
    <TextContent title = {title} id = {id} post={post}/>
        < Preview />
    <Menu/>
    <Controls/>
  </li>
  );
}
