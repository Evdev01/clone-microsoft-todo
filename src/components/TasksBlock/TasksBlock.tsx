import React, { FC, useState } from 'react'
import './TasksBlock.scss'
import TaskItem from "../TaskItem/TaskItem"
import TasksBlockCollapsed from "../TasksBlockCollapsed/TasksBlockCollapsed"
import { useTypedSelector } from "../../hooks/useTypedSelector"
import { Task } from "../../types"
import useRouterPath from "../../hooks/UseRouterPath"
import { TaskGroup } from "../../types/taskGroup"

const TasksBlock: FC = () => {

    const [isShowCollapsed, setIsShowCollapsed] = useState<boolean>(false)

    const { user }: any = useTypedSelector(state => state.profile)


    const routerPath = useRouterPath()

    const defineTaskGroup = (taskGroup: TaskGroup) => {
        return user.taskGroup.find((el: TaskGroup) => el.groupName === routerPath)
    }

    let searchFromNeedGroup = []

    const findFromMainTasksGroup = user.mainTasksGroup.find((el: TaskGroup) => el.groupName === routerPath)

    if (findFromMainTasksGroup) {
        searchFromNeedGroup = defineTaskGroup(user.mainTasksGroup)
    } else {
        searchFromNeedGroup = defineTaskGroup(user.createdTasksGroup)
    }


    const getItemsFromGroup = findFromMainTasksGroup || searchFromNeedGroup || user.mainTasksGroup[0]


    return (
        <div className="tasks__block">
            <div className="tasks__block-wrapper" >
                { getItemsFromGroup.tasksItems.map((task: Task) => <TaskItem key={ task.id } task={ task }/>) }
            </div>
            <TasksBlockCollapsed completedTaskLength={ getItemsFromGroup.completedTasks.length }
                                 isShowCollapsed={ isShowCollapsed } setIsShowCollapsed={ setIsShowCollapsed }/>
            { isShowCollapsed ? <div className="collapsed__block-wrapper">
                { getItemsFromGroup.completedTasks.map((task: Task) => <TaskItem key={ task.id } task={ task }/>) }
            </div> : null }

        </div>
    )
}

export default TasksBlock