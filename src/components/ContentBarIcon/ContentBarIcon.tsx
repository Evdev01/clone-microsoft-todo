import React, { FC } from 'react'
import './ContentBarIcon.scss'


interface TContentBarIconProps {
    title: string
    toggleSortMenu?: () => void
}


const ContentBarIcon: FC<TContentBarIconProps> = ({ children, title,toggleSortMenu }) => {
    return (
        <div className="content__bar-icon" onClick={toggleSortMenu}>
            { children }
            <p>{ title }</p>
        </div>
    )
}

export default ContentBarIcon