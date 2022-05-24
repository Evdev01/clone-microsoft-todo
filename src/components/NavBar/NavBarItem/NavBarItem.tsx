import React, { FC } from 'react'
import './NavBarItem.scss'
import { useTypedSelector } from "../../../hooks/useTypedSelector"

interface TNavBarItemProps {
    title: string
    nameActiveSideBarMenu: string
    openSideMenu: (sideMenuName: string) => void
}

const NavBarItem: FC<TNavBarItemProps> = ({ children, title, nameActiveSideBarMenu, openSideMenu }) => {

    const { isShowSidebarMenu } = useTypedSelector(state => state.sideBar)

    return (
        <li className={ isShowSidebarMenu === nameActiveSideBarMenu ? 'nav__link-active' : '' }>
            <div className="nav__link" title={ title } onClick={() => openSideMenu(nameActiveSideBarMenu)}>
                { children }
            </div>
        </li>
    )
}

export default NavBarItem