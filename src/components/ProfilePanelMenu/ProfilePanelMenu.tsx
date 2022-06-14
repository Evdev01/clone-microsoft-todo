import React, { FC, useEffect, useRef } from 'react'
import './ProfilePanelMenu.scss'
import ProfileInitials from "../ProfileInitials/ProfileInitials"
import MicrosoftIcon from "../svg/MicrosoftIcon"
import { useDispatch } from "react-redux"
import { openSideBarMenu } from "../../store/reducers/side-bar/action-creators"
import { useTypedSelector } from "../../hooks/useTypedSelector"
import { logOutProfile } from "../../store/reducers/auth/action-creators"

const ProfilePanelMenu: FC = () => {


    const wrapperRef = useRef(null)
    const dispatch = useDispatch()
    const { isShowProfileMenu } = useTypedSelector(state => state.sideBar)


    useOutsideAlerter(wrapperRef)

    function useOutsideAlerter(ref: any) {
        useEffect(() => {
            function handleClickOutside(event: any) {
                // @ts-ignore
                if (ref.current && !ref.current.contains(event.target) && !isShowProfileMenu.current.contains(event.target)) {
                    dispatch(openSideBarMenu(''))
                }
            }

            document.addEventListener("mousedown", handleClickOutside)
            return () => {
                document.removeEventListener("mousedown", handleClickOutside)
            }
        }, [ref])
    }

    const logOut = () => {
        dispatch(logOutProfile(false))
        dispatch(openSideBarMenu(''))
    }

    return (
        <div className="profile__panel" ref={ wrapperRef }>
            <div className="profile__panel-wrapper">
                <div className="profile__panel-header">
                    <MicrosoftIcon/>
                    <div className="profile__panel-header-exit" onClick={ logOut }>
                        <p>Выйти</p>
                    </div>
                </div>
                <div className="profile__panel-content">
                    <ProfileInitials/>
                    <div className="profile__panel-info-user">
                        <h6>Name Surname</h6>
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