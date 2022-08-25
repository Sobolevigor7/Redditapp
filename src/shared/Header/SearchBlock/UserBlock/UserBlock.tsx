import React from 'react';
import styles from './userblock.css';
import {EIcons, Icon} from "../../../Icon";
import {Break} from "../../../Break";
import {EColor, Text} from "../../../Text";

interface IUserBlockProps {
  avatarSrc?: string
  username?: string
    loading?: boolean
}

let client_id = process.env.CLIENT_ID;
if (client_id) {
  client_id = client_id.trim();
  //console.log(client_id)
}

export function UserBlock( { avatarSrc, username, loading }: IUserBlockProps ) {
  return (

      <a href={`https://www.reddit.com/api/v1/authorize?client_id=${client_id}&response_type=code&state=random_string&redirect_uri=https://skillbox-react-reddit-app.herokuapp.com/auth&duration=permanent&scope=read submit identity`}
        className={styles.userBox}>
        <div className={styles.avatarBox}>
          {avatarSrc?
            <img src={avatarSrc} alt='user avatar' className={styles.avatarImage}/>:
            <Icon icon={EIcons.anonim} size={50} />
          }

        </div>

      <div className={styles.username}>
      <Break size={12} />
          {
              loading?  (
                  <Text size={20} color={EColor.grey99}>Загрузка</Text>
              ) : (
                  <Text size={20} color={username ? EColor.black : EColor.grey99}>{username || 'Аноним'}</Text>
              )
          }

      </div>
      </a>

  );
}
