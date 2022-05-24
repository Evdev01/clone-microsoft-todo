import React, { FC } from 'react'
import './UserSettingsItem.scss'
import ToggleButton from "../ToggleButton/ToggleButton"

interface TUserSittingItemProps {
    title: string
    checked: boolean
}

const UserSettingsItem: FC<TUserSittingItemProps> = ({ title, checked }) => {

    return (
        <div className="user__setting-menu-item">
            <div className="user__setting-menu-item-title">{ title }</div>
            <div className="user__setting-menu-item-status">
                <ToggleButton checked={checked}/>
            </div>
        </div>
    )
}

export default UserSettingsItem