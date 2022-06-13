import React, { FC } from 'react'
import './TasksBlock.scss'
import TaskItem from "../TaskItem/TaskItem"
import TasksBlockCollapsed from "../TasksBlockCollapsed/TasksBlockCollapsed"
import { useTypedSelector } from "../../hooks/useTypedSelector"
import { Task } from "../../types/task"
import useRouterPath from "../../hooks/UseRouterPath"

const TasksBlock: FC = () => {

    const { user }: any = useTypedSelector(state => state.profile)



    const routerPath = useRouterPath()

    const checkRoutePath = routerPath || user.mainTasksGroup[0]

    const findFromMainTasksGroup = user.mainTasksGroup.find((el: any) => el.groupName === routerPath)
    const findFromCreatedTasksGroup = user.createdTasksGroup.find((el: any) => el.groupName === routerPath)

    const getItemsFromGroup = findFromMainTasksGroup || findFromCreatedTasksGroup || checkRoutePath

    return (
        <div className="tasks__block">
            <div className="tasks__block-wrapper">
                { getItemsFromGroup.tasksItems.map((task: Task) => <TaskItem key={ task.id } task={ task }/>) }
            </div>
            <TasksBlockCollapsed/>
        </div>
    )
}

export default TasksBlock