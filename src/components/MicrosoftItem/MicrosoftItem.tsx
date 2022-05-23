import React, { FC } from 'react'
import './MicrosoftItem.scss'

interface TMicrosoftItem {
    icon?: any
    text: string
}

const MicrosoftItem: FC<TMicrosoftItem> = ({ icon, text }) => {
    return (
        <div className="microsoft__programs">
            <div className="microsoft__programs-item">
                <div>{icon}</div>
                <p>{ text }</p>
            </div>
        </div>
    )
}

export default MicrosoftItem