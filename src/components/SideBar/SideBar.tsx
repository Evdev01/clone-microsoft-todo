import React, { FC } from 'react'
import './SideBar.scss'
import SideBarItem from "../SideBarItem/SideBarItem"
import SunnyIcon from "../svg/SunnyIcon"
import BurgerMenu from "../BurgerMenu/BurgerMenu"
import IconStar from "../svg/IconStar"
import CalendarIcon from "../svg/CalendarIcon"
import AccountIcon from "../svg/AccountIcon"
import HomeIcon from "../svg/HomeIcon"
import SideBarSortable from "../SideBarSortable/SideBarSortable"
import SideBarMain from "../SideBarMain/SideBarMain"

interface TSideBarProps {
    openBurgerMenu: () => void
    isShowSideBar: boolean
}

const SideBar: FC<TSideBarProps> = ({ openBurgerMenu, isShowSideBar }) => {
    return (
        <div className="side__bar">
            <BurgerMenu openBurgerMenu={ openBurgerMenu }/>
            <div className="side__bar-wrapper">
                <SideBarMain/>
            </div>
            <SideBarSortable/>
        </div>

    )
}

export default SideBar