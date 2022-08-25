import React, {ChangeEvent, FormEvent, useEffect, useRef, useState} from 'react';
import styles from './answerform.css';

interface IAnswerForm {
  user? : string
}

export function AnswerForm(userName: IAnswerForm) {
  const ref = useRef<HTMLTextAreaElement>(null);

  const {user}  = userName;
  const [value, changeValue] = useState(user)
  useEffect( () => {
    ref.current?.focus();
  })

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    changeValue(event.target.value);
  }
  function handleSubmit (event: FormEvent) {
    event.preventDefault();
    console.log(ref.current?.value); //Вывод для неконтролируемой формы
    console.log(value) // Вывод для контролируемой формы
  }

  /* Вариант для неконтролируемой формы
      <form onSubmit={handleSubmit} className={styles.form}>
        <textarea ref={ref} className={styles.input} defaultValue={user} />
        <button type="submit" className={styles.button}>Ответить</button>
      </form>
   */

  return ( // Вариант для контролируемой формы
      <form onSubmit={handleSubmit} className={styles.form}>
        <textarea ref={ref} className={styles.input} value={value} onChange={handleChange}/>
        <button type="submit" className={styles.button}>Ответить</button>
      </form>

  );
}
