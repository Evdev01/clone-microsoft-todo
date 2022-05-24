import React, { FC } from 'react'
import './NewsPanelMenuItem.scss'
import IntelligenceMenuItem from "../IntelligenceMenuItem/IntelligenceMenuItem"

interface INewPanelMenuItemProps {
    mainIcon: any
    icon: any
    link: string
}

const NewsPanelMenuItem:FC<INewPanelMenuItemProps> = ({mainIcon, icon, children, link}) => {
    return (
        <div className="news__panel-item">
            <div className="news__panel-item-wrapper">
                {mainIcon}
            </div>
            <div className="news__panel-item-info">
                <div className='news__panel-item-icon'>
                    {icon}
                </div>
                <div className="news__panel-item-info-text">
                    {children}
                    <IntelligenceMenuItem title={ 'Подробнее' } boldLink link={link}/>
                </div>
            </div>
        </div>
    )
}

export default NewsPanelMenuItem