import React, { FC } from 'react'
import './ContentBarIcon.scss'


interface TContentBarIconProps {
    title: string
}


const ContentBarIcon: FC<TContentBarIconProps> = ({ children, title }) => {
    return (
        <div className="content__bar-icon">
            { children }
            <p>{ title }</p>
        </div>
    )
}

export default ContentBarIcon