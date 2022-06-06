import React, { FC, useEffect, useRef } from 'react'
import './SideBar.scss'
import BurgerMenu from '../BurgerMenu/BurgerMenu'
import SideBarSortableItem from '../SideBarSortable/SideBarSortableItem'
import SideBarMain from '../SideBarMain/SideBarMain'
import SideBarItem from '../SideBarItem/SideBarItem'
import SideBarCreateList from '../SideBarCreateList/SideBarCreateList'
import SideBarFooter from '../SideBarFooter/SideBarFooter'

interface TSideBarProps {
    openBurgerMenu: () => void
    setIsShowSideBar: any
}

const SideBar: FC<TSideBarProps> = ({ openBurgerMenu, setIsShowSideBar }) => {


    return (
        <div className="side__bar">
            <BurgerMenu openBurgerMenu={ openBurgerMenu }/>
            <div className="side__bar-wrapper">
                <SideBarMain/>
                    <SideBarSortableItem/>
                    <SideBarItem title={'tile'} route={'some'}/>
                    <SideBarItem title={'tile'} route={'some'}/>
            </div>
            <SideBarCreateList/>
            <SideBarFooter/>
        </div>

    )
}

export default SideBar