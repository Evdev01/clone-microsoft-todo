import React from 'react'
import './SortMenu.scss'
import IconStar from "../svg/IconStar"
import CalendarIcon from "../svg/CalendarIcon"
import SortIcon from "../svg/SortIcon"
import CalendarPlusIcon from "../svg/CalendarPlusIcon"
import MenuWrapperItem from "../MenuWrapperItem/MenuWrapperItem"

const SortMenu = () => {
    return (
        <div className="sort-menu">
            <div className="sort-menu-wrapper">
                <MenuWrapperItem icon={ <IconStar/> } title={ 'Важность' }/>
                <MenuWrapperItem icon={ <CalendarIcon/> } title={ 'Дата выполнения' }/>
                <MenuWrapperItem icon={ <SortIcon/> } title={ 'По алфавиту' }/>
                <MenuWrapperItem icon={ <CalendarPlusIcon/> } title={ 'По дате создания' }/>
            </div>

        </div>
    )
}

export default SortMenu