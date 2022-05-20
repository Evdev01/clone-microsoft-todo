import React, { FC, ReactElement } from 'react'
import './TaskInfoBlockItem.scss'

interface TTaskInfoBlockProps {
    icon?: ReactElement | string
    title: string
    titleBlue?: boolean
    unHover?: boolean
}


const TaskInfoBlockItem: FC<TTaskInfoBlockProps> = ({ icon, title, titleBlue,unHover }) => {
    return (
        <div className={unHover ? 'task__info-block-item' : 'task__info-block-item hover'}>
            <div className='task__info-block-item-icon'>{ icon }</div>
            <div className={!titleBlue ? 'task__info-block-item-title' : 'task__info-block-item-title blue'}>{ title }</div>
        </div>
    )
}

export default TaskInfoBlockItem