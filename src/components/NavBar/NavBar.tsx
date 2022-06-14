import React, { FC, useCallback, useEffect, useRef } from 'react'
import './NavBar.scss'
import SettingIcon from "../svg/SettingIcon"
import QuestionIcon from "../svg/QuestionIcon"
import GramophoneIcon from "../svg/GramophoneIcon"
import ProfileInitials from "../ProfileInitials/ProfileInitials"
// todo import NavBarItem
import NavBarItem from "./NavBarItem/NavBarItem"
import { useDispatch } from "react-redux"
import { openSideBarMenu, refProfileMenuAction } from "../../store/reducers/side-bar/action-creators"
import { useTypedSelector } from "../../hooks/useTypedSelector"

const NavBar: FC = () => {

    const navItemRef = useRef()
    const dispatch = useDispatch()
    useEffect( () => {
        dispatch(refProfileMenuAction(navItemRef))
    }, [])

    const { isShowSidebarMenu } = useTypedSelector(state => state.sideBar)


    const openSideMenu = useCallback((sideMenuName) => {
        if (isShowSidebarMenu === sideMenuName) {
            dispatch(openSideBarMenu(''))
        } else {
            dispatch(openSideBarMenu(sideMenuName))
        }
        }, [isShowSidebarMenu])

    return (
        <nav>
            <ul className="nav__bar-wrapper">
                <NavBarItem children={ <SettingIcon/> } title={ 'Параметры '} nameActiveSideBarMenu={'openUserSettings'} openSideMenu={openSideMenu} />
                <NavBarItem children={ <QuestionIcon/> } title={ 'Справка и обратная связь '} nameActiveSideBarMenu={'openFeedBack'} openSideMenu={openSideMenu}/>
                <NavBarItem children={ <GramophoneIcon/> } title={ 'Новые возможности '} nameActiveSideBarMenu={'newPossibilities'} openSideMenu={openSideMenu}/>
                <NavBarItem children={ <ProfileInitials/> } title={ 'Диспечер учетных записей пользователя Здесь Имя '} nameActiveSideBarMenu={'openProfile'} openSideMenu={openSideMenu} navItemRef={navItemRef}/>
            </ul>
        </nav>
    )
}

export default NavBar