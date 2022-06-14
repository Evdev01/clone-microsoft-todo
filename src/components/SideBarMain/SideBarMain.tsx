import React, { FC } from 'react'
import './SideBarMain.scss'
import SideBarItem from "../SideBarItem/SideBarItem"
import SunnyIcon from "../svg/SunnyIcon"
import IconStar from "../svg/IconStar"
import CalendarIcon from "../svg/CalendarIcon"
import AccountIcon from "../svg/AccountIcon"
import HomeIcon from "../svg/HomeIcon"
import { useTypedSelector } from "../../hooks/useTypedSelector"
import useRouterPath from "../../hooks/UseRouterPath"

const SideBarMain: FC = () => {

    const { user: {mainTasksGroup} }: any = useTypedSelector(state => state.profile)

    return (
        <div className="side__bar-main">
            <SideBarItem taskGroup={mainTasksGroup[0]} id={'1'} icon={ <SunnyIcon/> } title={ 'Мой день' } route='myday'/>
            <SideBarItem taskGroup={mainTasksGroup[1]} id={'2'} icon={ <IconStar/> } title={ 'Важно' } route='important'/>
            <SideBarItem taskGroup={mainTasksGroup[2]} id={'3'} icon={ <CalendarIcon/> } title={ 'Запланировано' } route='planned'/>
            <SideBarItem taskGroup={mainTasksGroup[3]} id={'4'} icon={ <AccountIcon/> } title={ 'Назначен мне' } route='assigned_to_me'/>
            <SideBarItem taskGroup={mainTasksGroup[4]} id={'5'} icon={ <HomeIcon/> } title={ 'Задачи' } route='inbox'/>
        </div>
    )
}

export default SideBarMain