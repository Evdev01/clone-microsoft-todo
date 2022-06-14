import React, { FC, useCallback } from 'react'
import './NavBarItem.scss'
import { useTypedSelector } from "../../../hooks/useTypedSelector"

interface TNavBarItemProps {
    title: string
    nameActiveSideBarMenu: string
    openSideMenu: (sideMenuName: string) => void
    navItemRef?: any
}

const NavBarItem: FC<TNavBarItemProps> = ({ children, title, nameActiveSideBarMenu, openSideMenu, navItemRef }) => {

    const { isShowSidebarMenu } = useTypedSelector(state => state.sideBar)

    const toggleSideMenu = useCallback(() => {
        openSideMenu(nameActiveSideBarMenu)
    }, [isShowSidebarMenu])

    return (
        <li className={ isShowSidebarMenu === nameActiveSideBarMenu ? 'nav__link-active' : '' } ref={ navItemRef }>
            <div className="nav__link" title={ title } onClick={ toggleSideMenu }>
                { children }
            </div>
        </li>
    )
}

export default NavBarItem