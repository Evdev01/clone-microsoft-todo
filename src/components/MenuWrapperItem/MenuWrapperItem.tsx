import React, { FC } from 'react'
import './MenuWrapperItem.scss'

interface TMenuWrapperItemProps {
    icon: any
    title: string
    time?: string | any
}

const MenuWrapperItem:FC<TMenuWrapperItemProps> = ({icon, title, time}) => {
    return (
        <div className='menu-wrapper__item'>
            <div className="menu-wrapper__item-wrapper">
                <div className="menu-wrapper__item-info">
                    {icon}
                    <p>{title}</p>
                </div>
                <span>{time}</span>
            </div>
        </div>
    )
}

export default MenuWrapperItem