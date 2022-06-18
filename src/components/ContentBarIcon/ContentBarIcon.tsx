import React, { Dispatch, FC, MouseEventHandler, SetStateAction } from 'react'
import './ContentBarIcon.scss'


interface IContentBarIconProps {
    title: string
    toggleSortMenu?: MouseEventHandler<HTMLDivElement>
}


const ContentBarIcon: FC<IContentBarIconProps> = ({ children, title,toggleSortMenu }) => {
    return (
        <div className="content__bar-icon" onClick={toggleSortMenu}>
            { children }
            <p>{ title }</p>
        </div>
    )
}

export default ContentBarIcon