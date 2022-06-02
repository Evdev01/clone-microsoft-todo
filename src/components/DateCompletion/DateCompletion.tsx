import React from 'react'
import './DateCompletion.scss'
import MenuWrapperItem from "../MenuWrapperItem/MenuWrapperItem"
import TodayIcon from "../svg/TodayIcon"
import CalendarNextWeekIcon from "../svg/CalendarNextWeekIcon"
import TomorrowIcon from "../svg/TomorrowIcon"

const DateCompletion = () => {
    return (
        <div className='date__completion'>
            <MenuWrapperItem icon={ <TodayIcon/> } title={ 'Сегодня' } time={'вт'}/>
            <MenuWrapperItem icon={ <TomorrowIcon/> } title={ 'Завтра' } time={'ср'}/>
            <MenuWrapperItem icon={ <CalendarNextWeekIcon/> } title={ 'Следующая неделя' } time={'пн'}/>
        </div>
    )
}

export default DateCompletion