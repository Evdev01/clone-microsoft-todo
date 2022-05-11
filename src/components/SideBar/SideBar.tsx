import React, { FC } from 'react'
import './SideBar.scss'
import BurgerMenu from '../BurgerMenu/BurgerMenu'
import SideBarSortableItem from '../SideBarSortable/SideBarSortableItem'
import SideBarMain from '../SideBarMain/SideBarMain'
import SideBarItem from '../SideBarItem/SideBarItem'
import SideBarCreateList from '../SideBarCreateList/SideBarCreateList'
import SideBarFooter from '../SideBarFooter/SideBarFooter'

interface TSideBarProps {
    openBurgerMenu: () => void
}

const SideBar: FC<TSideBarProps> = ({ openBurgerMenu }) => {
    return (
        <div className="side__bar">
            <BurgerMenu openBurgerMenu={ openBurgerMenu }/>
            <div className="side__bar-wrapper">
                <SideBarMain/>
                    <SideBarSortableItem/>
                    <SideBarItem title={'tile'} route={'some'}/>
                    <SideBarItem title={'tile'} route={'some'}/>
                    <SideBarItem title={'tile'} route={'some'}/>
                    <SideBarItem title={'tile'} route={'some'}/>
                    <SideBarItem title={'tile'} route={'some'}/>
                    <SideBarItem title={'tile'} route={'some'}/>
                    <SideBarItem title={'tile'} route={'some'}/>
                    <SideBarItem title={'tile'} route={'some'}/>
                    <SideBarItem title={'tile10'} route={'some'}/>
                    <SideBarItem title={'tile9'} route={'some'}/>
                    <SideBarItem title={'tile8'} route={'some'}/>
                    <SideBarItem title={'tile7'} route={'some'}/>
                    <SideBarItem title={'tile6'} route={'some'}/>
                    <SideBarItem title={'tile5'} route={'some'}/>
                    <SideBarItem title={'tile4'} route={'some'}/>
                    <SideBarItem title={'tile3'} route={'some'}/>
                    <SideBarItem title={'tile2'} route={'some'}/>
                    <SideBarItem title={'tile1'} route={'some'}/>
            </div>
            <SideBarCreateList/>
            <SideBarFooter/>
        </div>

    )
}

export default SideBar