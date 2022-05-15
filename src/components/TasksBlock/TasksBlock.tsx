import React, { FC } from 'react'
import './TasksBlock.scss'
import TaskItem from "../TaskItem/TaskItem"
import TasksBlockCollapsed from "../TasksBlockCollapsed/TasksBlockCollapsed"

const TasksBlock: FC = () => {

    return (
        <div className="tasks__block">
            <div className="tasks__block-wrapper">
                <TaskItem title={ 'Купить хлеб' } category={ 'Временно отложенные задачи' }/>
                <TaskItem title={ 'Купить молоко' } category={ 'Покупки' }/>
            </div>
            <TasksBlockCollapsed/>
        </div>
    )
}

export default TasksBlock