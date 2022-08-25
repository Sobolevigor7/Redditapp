import React, {useEffect, useRef} from 'react';
import styles from './dropdownMain.css';
import ReactDOM from "react-dom";

interface IDropdownProps {
    children: React.ReactNode;
    isOpen?: boolean;
    onOpen?: () => void;
    onClose?: () => void;
}
const NOOP = () => {};
export function Dropdown({children, isOpen, onOpen = NOOP, onClose = NOOP}: IDropdownProps) {

    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        function handleOpen(event: MouseEvent) {
            if (event.target instanceof Node && !ref.current?.contains(event.target)) {
                onClose();
            }
        }
        document.addEventListener('click', handleOpen)
        return () => {
            document.removeEventListener('click', handleOpen)
        }
    })
        const dropnode = document.querySelector('#dropdown_root');
        if(!dropnode) return null;

        return  ReactDOM.createPortal(
            <div className={styles.container} ref = {ref}>
                <div className={styles.listContainer}>
                    <div className={styles.list} >
                        <div className={styles.children}>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
    , dropnode);
}
