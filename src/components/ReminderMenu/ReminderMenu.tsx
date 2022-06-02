import React from 'react'
import './ReminderMenu.scss'
import LaterTodayIcon from "../svg/LaterTodayIcon"
import TomorrowCircleIcon from "../svg/TomorrowCircleIcon"
import NextWeakIcon from "../svg/NextWeakIcon"
import MenuWrapperItem from "../MenuWrapperItem/MenuWrapperItem"


const ReminderMenu = () => {
    return (
        <div>
            <MenuWrapperItem icon={ <LaterTodayIcon/> } title={ 'Позднее сегодня' } time={ '5:00' }/>
            <MenuWrapperItem icon={ <TomorrowCircleIcon/> } title={ 'Завтра' } time={ 'ср, 9:00' }/>
            <MenuWrapperItem icon={ <NextWeakIcon/> } title={ 'Следующая неделя' } time={ 'пн, 9:00' }/>
        </div>
    )
}

export default ReminderMenu