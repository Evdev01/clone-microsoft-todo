import React, { FC } from 'react'
import './NavBar.scss'
import SettingIcon from "../svg/SettingIcon"
import QuestionIcon from "../svg/QuestionIcon"
import GramophoneIcon from "../svg/GramophoneIcon"
import ProfileInitials from "../ProfileInitials/ProfileInitials"
import NavBarItem from "./NavBarItem/NavBarItem"
import { useDispatch } from "react-redux"
import { openSideBarMenu } from "../../store/reducers/side-bar/action-creators"

const NavBar: FC = () => {

    const dispatch = useDispatch()


    const openSideMenu = (sideMenuName:string) => {
      dispatch(openSideBarMenu(sideMenuName))
    }

    return (
        <nav>
            <ul className="nav__bar-wrapper">
                <NavBarItem children={ <SettingIcon/> } title={ 'Параметры '} nameActiveSideBarMenu={'openUserSettings'} openSideMenu={openSideMenu} />
                <NavBarItem children={ <QuestionIcon/> } title={ 'Справка и обратная связь '} nameActiveSideBarMenu={'openFeedBack'} openSideMenu={openSideMenu}/>
                <NavBarItem children={ <GramophoneIcon/> } title={ 'Новые возможности '} nameActiveSideBarMenu={'newPossibilities'} openSideMenu={openSideMenu}/>
                <NavBarItem children={ <ProfileInitials/> } title={ 'Диспечер учетных записей пользователя Здесь Имя '} nameActiveSideBarMenu={'openProfile'} openSideMenu={openSideMenu}/>
            </ul>
        </nav>
    )
}

export default NavBar