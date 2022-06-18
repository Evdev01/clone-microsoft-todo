import React, { FC, ReactElement } from 'react'
import './TaskInfoBlockItem.scss'

interface ITaskInfoBlockProps {
    icon?: ReactElement | string
    title: string
    titleBlue?: boolean
    unHover?: boolean
    isShowTaskMenu?: (nameMenu: string) => void
    menuName?: any
}


const TaskInfoBlockItem: FC<ITaskInfoBlockProps> = ({ icon, title, titleBlue,unHover, isShowTaskMenu, menuName }) => {

    return (
        <div className={unHover ? 'task__info-block-item' : 'task__info-block-item hover'} onClick={() => isShowTaskMenu ? isShowTaskMenu(menuName) : null}>
            <div className='task__info-block-item-icon'>{ icon }</div>
            <div className={!titleBlue ? 'task__info-block-item-title' : 'task__info-block-item-title blue'}>{ title }</div>
        </div>
    )
}

export default TaskInfoBlockItem