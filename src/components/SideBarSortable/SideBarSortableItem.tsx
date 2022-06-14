import React, { FC } from 'react'
import './SideBarSortable.scss'
import SideBarItem from "../SideBarItem/SideBarItem"
import { useTypedSelector } from "../../hooks/useTypedSelector"

const SideBarSortableItem:FC = () => {

    const { user: {mainTasksGroup} }: any = useTypedSelector(state => state.profile)

    return (
        <div>
            <div className="side__bar-sortable">
                <SideBarItem taskGroup={mainTasksGroup[5]} icon={ '👋' } title={ 'Приступая к работе' } route={'go-work'}/>
            </div>
        </div>
    )
}

export default SideBarSortableItem