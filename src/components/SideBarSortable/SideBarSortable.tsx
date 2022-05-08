import React, { FC } from 'react'
import './SideBarSortable.scss'
import SideBarItem from "../SideBarItem/SideBarItem"

const SideBarSortable:FC = () => {
    return (
        <div>
            <div className="side__bar-sortable">
                <SideBarItem icon={ '👋' } title={ 'Приступая к работе' } route={'go-work'}/>
            </div>
        </div>
    )
}

export default SideBarSortable