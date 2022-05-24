import React, { FC } from 'react'
import './CallBackMenu.scss'
import CloseIcon from "../svg/CloseIcon"
import IntelligenceMenuItem from "../IntelligenceMenuItem/IntelligenceMenuItem"
import {help} from './CallBackMenuLins'
import { openSideBarMenu } from "../../store/reducers/side-bar/action-creators"
import { useDispatch } from "react-redux"

const CallBackMenu:FC = () => {

    const dispatch = useDispatch()

    const showUserSetting = () => {
        dispatch(openSideBarMenu(''))
    }

    return (
        <div className='call__back-menu'>
            <div className="call__back-menu-wrapper">
                <div className="call__back-menu-header">
                    <h4>Справка</h4>
                    <div className='call__back-menu-close' onClick={showUserSetting}>
                        <CloseIcon/>
                    </div>
                </div>
                <IntelligenceMenuItem title={ 'Получить поддержку' } link={ help }/>
                <div className="call__back-menu-sync-block">
                    <div className="call__back-menu-sync-button">Синхронизировать</div>
                    <p>Обновленно</p>
                </div>
            </div>
        </div>
    )
}

export default CallBackMenu