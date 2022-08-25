import React, {useEffect, useRef, useState} from 'react';
import styles from './cardslist.css';
import {Card} from "./Card";
import axios from 'axios'

import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/reducer";

export function CardsList() {
  const token = useSelector<RootState>(state => state.token)
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [errorLoading, setErrorLoading] = useState('')
  const bottomOfList = useRef<HTMLDivElement>(null);
  const [nextAfter, setNextAfter] = useState('');
  const [loadTimes, setLoadTimes] = useState(0);
  const [reloadFlag, setReloadFlag] = useState(false)



    useEffect(() => {
  if (!token || token === 'undefined') return;
      async function load() {
        setLoading(true);
        setErrorLoading('');
        setLoadTimes(prevState => prevState + 1  );

        try {
          const  {data: {data: {after, children}}}  = await axios.get('https://oauth.reddit.com/rising/', {
            headers: {Authorization: `bearer ${token}`},
            params: {
              limit: 4,
              after: nextAfter,
            }

          });

          if (after !== 'undefined') {
            setNextAfter(after);
          }



          setPosts(prevChildren => prevChildren.concat(...children) );


        } catch (error) {
          setErrorLoading(String(error))
        }
        setLoading(false);
      }

        const observer = new IntersectionObserver((entries) => {
          if (entries[0].isIntersecting ) {
              load();
          }

        }, {
          rootMargin: '10px',
        });


        if (bottomOfList.current ) {

          observer.observe(bottomOfList.current);
          setReloadFlag(false)
        }
        return () => {
          if (bottomOfList.current ) {
            observer.unobserve(bottomOfList.current);

          }}

    }, [bottomOfList.current, token, nextAfter, reloadFlag]);



  function handleClick () {
    setLoadTimes(0);
    setReloadFlag(true)
  }

  return (
      <div>
      <ul className={styles.cardsList}>

        {token ==='undefined' && (
            <p>Для загрузки списка статей необходима авторизация</p>
        )}

        {posts.length === 0 && !loading && !errorLoading && token !=='undefined' && (
            <p>Нет ни одного поста</p>
        )}
        {posts.map(post =>
            <Card
                key={/*post.data.id*/ Math.random().toString(36).substring(2, 15) }
                title={post.data.title}
                id={post.data.id}
                post = {post}
            />
        )}


        {  loadTimes <= 1 && (
            <div ref = {bottomOfList}/>
        )}


        {loading && (
            <div style = {{textAlign: 'center'}}>
              Загрузка...
            </div>

        )}
        {errorLoading && (
            <div role = 'alert' style= {{textAlign: 'center'}}>
              {errorLoading}
            </div>
        )}

      </ul>
        { loadTimes >= 2 && (
            <button className={styles.loadMoreButton} type='button' onClick={handleClick}>Загрузить ещё</button>
        )}
      </div>
  );
}
