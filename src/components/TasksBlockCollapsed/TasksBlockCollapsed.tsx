import React, { FC, useState } from 'react'
import './TasksBlockCollapsed.scss'
import ChevronRight from "../svg/ChevronRight"

interface ITasksBlockCollapsedProps {
    completedTaskLength: string
    setIsShowCollapsed: any
    isShowCollapsed: boolean
}

const TasksBlockCollapsed:FC<ITasksBlockCollapsedProps> = ({completedTaskLength, setIsShowCollapsed, isShowCollapsed}) => {


    return (
        <div className="tasks__block-collapsed">
                <span className={ `open__close-arrow ${ isShowCollapsed ? 'closed' : '' }` }
                      onClick={ () => setIsShowCollapsed(!isShowCollapsed) }>
                        <ChevronRight/>
                </span>
            <span>Завершенные</span>
            <h3>{completedTaskLength}</h3>
        </div>
    )
}

export default TasksBlockCollapsed