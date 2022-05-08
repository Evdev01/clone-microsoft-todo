import React, { FC } from 'react'
import './EntryBarTask.scss'
import CalendarIcon from "../svg/CalendarIcon"
import NotificationIcon from "../svg/NotificationIcon"
import RecurringIcon from "../svg/RecurringIcon"

const EntryBarTask: FC = () => {
    return <div className="add__task-panel-entrybar">
        <div className="add__task-panel-entrybar-icons">
            <CalendarIcon/>
            <NotificationIcon/>
            <RecurringIcon/>
        </div>
        <button>Добавить</button>
    </div>
}

export default EntryBarTask