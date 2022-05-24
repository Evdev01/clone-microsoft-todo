import React, { FC } from 'react'
import './UserSettingMenu.scss'
import CloseIcon from "../svg/CloseIcon"
import UserSettingMenuItem from "../UserSettingMenuItem/UserSettingMenuItem"
import IntelligenceMenu from "../IntelligenceMenu/IntelligenceMenu"
import { useDispatch } from "react-redux"
import { openSideBarMenu } from "../../store/reducers/side-bar/action-creators"

const UserSettingMenu: FC = () => {

    const dispatch = useDispatch()

    const showUserSetting = () => {
        dispatch(openSideBarMenu(''))
    }

    const headerTitles = {
        general: 'Общие',
        smartLists: 'Смарт-списки',
        connectedApp: 'Подключенные приложения',
        notifications: 'Уведомления',
    }


    return (
        <div className="user__settings">
            <div className="user__settings-wrapper">
                <div className="user__settings-header">
                    <h3>Параметры</h3>
                    <div onClick={showUserSetting}>
                        <CloseIcon/>
                    </div>
                </div>
                <UserSettingMenuItem headerTitle={ headerTitles }/>
                <IntelligenceMenu/>
            </div>
        </div>
    )
}

export default UserSettingMenu