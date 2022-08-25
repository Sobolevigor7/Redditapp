import React, {useContext} from 'react';
import styles from './bestlist.css';
import { postsContext } from "../../context/postsContext";
import { GenericList } from "../../../utils/react/GenericList";

type TListType  = 'a'|'li' | 'button' | 'div';
const listItemType: TListType = 'li'



export function BestList() {
  let listIsLoaded = false;
  const data = useContext(postsContext)
  let list: any = {}
  let arr = [];
  if (data.data) {
    list = data.data;
    listIsLoaded = true;
    for (let i of list.children) {
      arr.push({
        id: i.data.id,
        text: i.data.selftext,
        As: listItemType,
        className: styles['listItem'],
      })
    }
  }

  return (
      <>
        {listIsLoaded && (
            <div>
              <h2 className={styles.listHeader}>Лучшие посты</h2>
              <ul className={styles.list}>
                <GenericList list={arr}/>
              </ul>
            </div>
        )}
      </>

  );
}
