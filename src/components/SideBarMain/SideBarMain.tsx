import React, { FC } from 'react'
import './SideBarMain.scss'
import SideBarItem from "../SideBarItem/SideBarItem"
import SunnyIcon from "../svg/SunnyIcon"
import IconStar from "../svg/IconStar"
import CalendarIcon from "../svg/CalendarIcon"
import AccountIcon from "../svg/AccountIcon"
import HomeIcon from "../svg/HomeIcon"

const SideBarMain: FC = () => {
    return (
        <div className="side__bar-main">
            <SideBarItem id={'1'} icon={ <SunnyIcon/> } title={ 'Мой день' } route='myday'/>
            <SideBarItem id={'1'} icon={ <IconStar/> } title={ 'Важно' } route='important'/>
            <SideBarItem id={'1'} icon={ <CalendarIcon/> } title={ 'Запланировано' } route='planned'/>
            <SideBarItem id={'1'} icon={ <AccountIcon/> } title={ 'Назначен мне' } route='assigned_to_me'/>
            <SideBarItem id={'1'} icon={ <HomeIcon/> } title={ 'Задачи' } route='inbox'/>
        </div>
    )
}

export default SideBarMain