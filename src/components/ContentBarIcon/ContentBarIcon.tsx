import React, { FC } from 'react'
import './ContentBarIcon.scss'


interface ContentBarIconProps {
    title: string
}


const ContentBarIcon: FC<ContentBarIconProps> = ({ children, title }) => {
    return (
        <div className="content__bar-icon">
            { children }
            <p>{ title }</p>
        </div>
    )
}

export default ContentBarIcon