import React, { FC } from 'react'
import './IntelligenceMenuItem.scss'

interface IIntelligenceMenuItemProps {
    icon?: any
    title: string
    boldText?: string
    boldLink?: boolean
    link?: string
}

const IntelligenceMenuItem: FC<IIntelligenceMenuItemProps> = ({ icon, title, boldText, boldLink, link }) => {
    return (
        <div className={ !!icon ? 'intelligence__menu-item-icon' : 'intelligence__menu-item' }>
            <div className="intelligence__menu-item-wrapper">
                { !!icon ? <div className="intelligence__menu-item-icon-svg">{ icon }</div> : null }

                <a href={link} target="_blank" className={ !!boldLink ? 'intelligence__item-bold' : 'intelligence__item' }>
                    { title }
                    { !!boldText ? <span>{ boldText }</span> : null }
                </a>
            </div>
        </div>
    )
}

export default IntelligenceMenuItem