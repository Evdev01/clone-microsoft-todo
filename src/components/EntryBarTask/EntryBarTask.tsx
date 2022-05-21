import React, { FC } from 'react'
import './EntryBarTask.scss'
import CalendarIcon from "../svg/CalendarIcon"
import NotificationIcon from "../svg/NotificationIcon"
import RecurringIcon from "../svg/RecurringIcon"

interface TEntryBarTaskProps {
    isActiveAddTaskButton: boolean
    creatTask: () => void
}

const EntryBarTask: FC<TEntryBarTaskProps> = ({ isActiveAddTaskButton, creatTask }) => {
    return <div className="add__task-panel-entrybar">
        <div className="add__task-panel-entrybar-icons">
            <CalendarIcon/>
            <NotificationIcon/>
            <RecurringIcon/>
        </div>
        <button onClick={ creatTask } className={ isActiveAddTaskButton ? 'active' : '' }>Добавить</button>
    </div>
}

export default EntryBarTask