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
            <SideBarItem icon={ <SunnyIcon/> } title={ 'Мой день' } route='myday'/>
            <SideBarItem icon={ <IconStar/> } title={ 'Важно' } route='important'/>
            <SideBarItem icon={ <CalendarIcon/> } title={ 'Запланированно' } route='planned'/>
            <SideBarItem icon={ <AccountIcon/> } title={ 'Назначен мне' } route='assigned_to_me'/>
            <SideBarItem icon={ <HomeIcon/> } title={ 'Задачи' } route='inbox'/>
        </div>
    )
}

export default SideBarMain