import React from "react";

interface IItem {
    id: string;
    text: string;
    onClick?: (id: string) => void;
    className?: string;
    As?: 'a'|'li' | 'button' | 'div' ;
    AsInner?: 'a'|'li' | 'button' | 'div' ;
    href?: string;
    icon?: object;
    cssId?: string;
}

interface IGenericListProps {
    list: IItem[];
}
const noop = () => {}

export function GenericList({list}: IGenericListProps) {
    return (
        <>
            {list.map(({As = 'div' , text, onClick = noop, className, id, href, icon, AsInner='div', cssId}) => (
                <As
                    className = {className}
                    onClick = {() =>  onClick(id)}
                    key = {id}
                    href = {href}
                    id = {cssId}
                >
                    <AsInner href = {href}>
                    {icon}<span>&nbsp;</span>{text}
                    </AsInner>
                </As>
            ))}

        </>
    )
}
