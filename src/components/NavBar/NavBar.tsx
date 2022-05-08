import React, { FC } from 'react'
import './NavBar.scss'
import SettingIcon from "../svg/SettingIcon"
import QuestionIcon from "../svg/QuestionIcon"
import GramophoneIcon from "../svg/GramophoneIcon"
import ProfileInitials from "../ProfileInitials/ProfileInitials"
import NavBarItem from "./NavBarItem/NavBarItem"

const NavBar: FC = () => {
    return (
        <nav>
            <ul className="nav__bar-wrapper">
                <NavBarItem children={ <SettingIcon/> } title={ 'Параметры '}/>
                <NavBarItem children={ <QuestionIcon/> } title={ 'Справка и обратная связь '}/>
                <NavBarItem children={ <GramophoneIcon/> } title={ 'Новые возможности '}/>
                <NavBarItem children={ <ProfileInitials/> } title={ 'Диспечер учетных записей пользователя Здесь Имя '}/>
            </ul>
        </nav>
    )
}

export default NavBar