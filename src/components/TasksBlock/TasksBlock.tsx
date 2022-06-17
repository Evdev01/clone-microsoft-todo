import React, { FC, useState } from 'react'
import './TasksBlock.scss'
import TaskItem from "../TaskItem/TaskItem"
import TasksBlockCollapsed from "../TasksBlockCollapsed/TasksBlockCollapsed"
import { useTypedSelector } from "../../hooks/useTypedSelector"
import { Task } from "../../types"
import useRouterPath from "../../hooks/UseRouterPath"

const TasksBlock: FC = () => {

    const [isShowCollapsed, setIsShowCollapsed] = useState(false)

    const { user }: any = useTypedSelector(state => state.profile)


    const routerPath = useRouterPath()


    let searchFromNeedGroup = []

    const findFromMainTasksGroup = user.mainTasksGroup.find((el: any) => el.groupName === routerPath)

    if (findFromMainTasksGroup) {
        searchFromNeedGroup = user.mainTasksGroup.find((el: any) => el.groupName === routerPath)
    } else {
        searchFromNeedGroup = user.createdTasksGroup.find((el: any) => el.groupName === routerPath)
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