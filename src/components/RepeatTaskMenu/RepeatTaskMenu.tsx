import React, { FC } from 'react'
import './RepeatTaskMenu.scss'
import MenuWrapperItem from "../MenuWrapperItem/MenuWrapperItem"
import DailyIcon from "../svg/DailyIcon"
import WeeklyIcon from "../svg/WeeklyIcon"
import WeekDays from "../svg/WeekDays"
import MonthlyIcon from "../svg/MonthlyIcon"
import YearlyIcon from "../svg/YearlyIcon"

const RepeatTaskMenu:FC = () => {
    return (
        <div>
            <MenuWrapperItem icon={ <DailyIcon/> } title={ 'Ежедневно' }/>
            <MenuWrapperItem icon={ <WeekDays/> } title={ 'Рабочие дни' }/>
            <MenuWrapperItem icon={ <WeeklyIcon/> } title={ 'Еженедельно' }/>
            <MenuWrapperItem icon={ <MonthlyIcon/> } title={ 'Ежемесячно' }/>
            <MenuWrapperItem icon={ <YearlyIcon/> } title={ 'Ежегодно' }/>
        </div>
    )
}

export default RepeatTaskMenu