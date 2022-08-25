import React, {useState} from 'react';
import styles from './menu.css';
import {Dropdown} from "../../../DropdownMain";
import {GenericList} from "../../../../utils/react/GenericList";
import {EIcons, Icon} from "../../../Icon";

type TListType  = 'a'|'li' | 'button' | 'div';
const listItemType: TListType = 'li'
const itemInner: TListType = 'a'
const commentsIcon = (<Icon icon={EIcons.comments} size={15}/>)
const shareIcon = (<Icon icon={EIcons.share} size={14}/>)
const hideIcon = (<Icon icon={EIcons.hide} size={14}/>)
const saveIcon = (<Icon icon={EIcons.save} size={14}/>)
const complainIcon = (<Icon icon={EIcons.complain} size={14}/>)

const MENU_LIST = [
  {id: 'comment', text: `  Комментарии`, className: styles['menuitem'], cssId: styles['comment'], As: listItemType, AsInner: itemInner, icon: commentsIcon, href: '#comments-url'},
  {id: 'share', text: 'Поделиться', className: styles['menuitem'], cssId: styles['share'], As: listItemType, AsInner: itemInner, icon: shareIcon, href: '#share-url' },
  {id: 'hide', text: 'Скрыть', className: styles['menuitem'], cssId: styles['hide'], As: listItemType, AsInner: itemInner, icon: hideIcon, href: '#hide-url' },
  {id: 'save', text: 'Сохранить', className: styles['menuitem'], cssId: styles['save'],  As: listItemType, AsInner: itemInner, icon: saveIcon, href: '#save-url'},
  {id: 'complain', text: 'Пожаловаться', className: styles['menuitem'], cssId: styles['complain'], As: listItemType, AsInner: itemInner, icon: complainIcon,href: '#complain-url' },
]

export function Menu() {
  const [isDropOpen, setDropOpen] = useState(false);
  return (
  <div className={styles.menu}>
    <button className={styles.menuButton} onClick={() => setDropOpen(!isDropOpen)}>
      <Icon icon={EIcons.menu} size={20}/>
    </button>
    {isDropOpen && (
        <Dropdown  onClose={() => {setDropOpen(false)}}>
          <ul className={styles.dropdown}>
            <GenericList list={MENU_LIST} />
            <li onClick={() => {setDropOpen(false)}} className={styles.menuitem+' '+ styles.closeButton } id="close" key={'close'}>Закрыть</li>
          </ul>
        </Dropdown>
    )}
  </div>
  );
}
