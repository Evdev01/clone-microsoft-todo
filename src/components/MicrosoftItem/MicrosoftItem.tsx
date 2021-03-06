import React, { FC } from 'react'
import './MicrosoftItem.scss'

interface IMicrosoftItem {
    icon?: any
    text: string
    link: string
}

const MicrosoftItem: FC<IMicrosoftItem> = ({ icon, text, link }) => {
    return (
        <div className="microsoft__programs">
            <a href={link} target="_blank" className="microsoft__programs-item">
                <div>{icon}</div>
                <p>{ text }</p>
            </a>
        </div>
    )
}

export default MicrosoftItem