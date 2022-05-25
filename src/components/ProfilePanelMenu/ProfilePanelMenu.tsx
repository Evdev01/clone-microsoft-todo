import React, { FC } from 'react'
import './ProfilePanelMenu.scss'
import ProfileInitials from "../ProfileInitials/ProfileInitials"
import MicrosoftIcon from "../svg/MicrosoftIcon"
import { useDispatch } from "react-redux"
import { openSideBarMenu } from "../../store/reducers/side-bar/action-creators"

const ProfilePanelMenu: FC = () => {

    const dispatch = useDispatch()

    const showUserSetting = () => {
        dispatch(openSideBarMenu(''))
    }

    return (
        <div className="profile__panel">
            <div className="profile__panel-wrapper">
                <div className="profile__panel-header">
                    <MicrosoftIcon/>
                    <div className="profile__panel-header-exit">
                        <p onClick={ showUserSetting }>Выйти</p>
                    </div>
                </div>
                <div className="profile__panel-content">
                    <ProfileInitials/>
                    <div className="profile__panel-info-user">
                        <h6>Фролов Сергей</h6>
                        <span>mail@mail.ru</span>
                        <p>
                            <a href={ 'https://account.microsoft.com/?ref=MeControl&refd=login.live.com' }
                               target="_blank">Моя учетная запись</a>
                        </p>
                        <p>
                            <a href={ 'https://account.microsoft.com/profile/' }>Мой профиль</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilePanelMenu