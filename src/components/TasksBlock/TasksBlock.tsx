import React, { FC } from 'react'
import './TasksBlock.scss'
import TaskItem from "../TaskItem"
import TasksBlockCollapsed from "../TasksBlockCollapsed/TasksBlockCollapsed"
import { useTypedSelector } from "../../hooks/useTypedSelector"
import { Task } from "../../types/task"

const TasksBlock: FC = () => {

    const { all_tasks }: any = useTypedSelector(state => state.tasks)

    return (
        <div className="tasks__block">
            <div className="tasks__block-wrapper">
                { all_tasks.map((task: Task) => <TaskItem key={ task.id } task={ task }/>) }
            </div>
            <TasksBlockCollapsed/>
        </div>
    )
}

export default TasksBlock