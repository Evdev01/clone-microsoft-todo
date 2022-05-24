import React, { FC } from 'react'
import './UserSettingMenuItem.scss'
import UserSettingsItem from "../UserSettingsItem/UserSettingsItem"

interface TUserSettingMenuItem {
    headerTitle: {
        general: string
        smartLists: string
        connectedApp: string
        notifications: string
    }
}

const UserSettingMenuItem:FC<TUserSettingMenuItem> = ({headerTitle:{general, smartLists, connectedApp, notifications}}) => {
    return (
        <div className="user__setting-menu">
            <h4>{general}</h4>
            <UserSettingsItem title={ 'Запрашивать подтверждение перед удалением' } checked={ true }/>
            <UserSettingsItem title={ 'Добавление новых задач наверх' } checked={ false }/>
            <UserSettingsItem title={ 'Перемещение вверх избранных задач' } checked={ true }/>
            <UserSettingsItem title={ 'Воспроизводить звук при завершении' } checked={ true }/>
            <UserSettingsItem title={ 'Показывать контекстные меню' } checked={ false }/>
            <UserSettingsItem title={ 'Показывать контекстные меню' } checked={ true }/>

            <h4>{smartLists}</h4>
            <UserSettingsItem title={ 'Запланировано' } checked={ true }/>
            <UserSettingsItem title={ 'Все' } checked={ false }/>
            <UserSettingsItem title={ 'Завершенные' } checked={ true }/>  <UserSettingsItem title={ 'Запланировано' } checked={ true }/>
            <UserSettingsItem title={ 'Все' } checked={ false }/>
            <UserSettingsItem title={ 'Завершенные' } checked={ true }/>
            <UserSettingsItem title={ 'Назначен мне' } checked={ false }/>
            <UserSettingsItem title={ 'Автоматически скрывать пустые смарт-списки' } checked={ false }/>

            <h4>{connectedApp}</h4>
            <UserSettingsItem title={ 'Планировщик' } checked={ true }/>

            <h4>{notifications}</h4>
            <UserSettingsItem title={ 'Электронная почта' } checked={ true }/>
        </div>
    )
}

export default UserSettingMenuItem