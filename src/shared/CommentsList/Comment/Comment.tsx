import React, {useState} from 'react';
import styles from "./comment.css";
import {EIcons, Icon} from "../../Icon";
import {UserLink} from "../../CardsList/Card/TextContent/UserLink";
import {AnswerForm} from "./AnswerForm";

export function Comment() {
    const user = 'Михаил Рогов';
    const [isAnswerFormOpen, setisAnswerFormOpen] = useState(false);
  return (
      <li>
       <div className={styles.metaData}>
        <UserLink user = {user}/>
         <span className={styles.createdAt}>   1 час назад</span>
       </div>
         <p className={styles.comment}>Сторонники тоталитаризма в науке будут объективно рассмотрены соответствующими инстанциями. Лишь реплицированные с зарубежных источников, современные исследования будут описаны максимально подробно. </p>
          <button className={styles.answerButton} onClick={() => {setisAnswerFormOpen(!isAnswerFormOpen)}}>
              <Icon icon={EIcons.comments} size={15} /><span>&nbsp;</span>Ответить
          </button>
          { isAnswerFormOpen && (
              <AnswerForm user={user}/>
          )}

      </li>

  );
}
