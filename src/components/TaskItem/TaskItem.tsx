import React, { FC, useState } from 'react'
import './TaskItem.scss'
import IconStar from "../svg/IconStar"
import ChevronDown from "../svg/ChevronDown"
import { useDispatch } from "react-redux"
import { getInfoCurrentTask } from "../../store/reducers/profile/action-creators"
import { Task } from "../../types/task"
import CustomContextMenu from "../CustomContextmenu/CustomContextMenu"
import contextMenuItems from './ContextMenuItems'
import useRouterPath from "../../hooks/UseRouterPath"
import { openTaskInfoAbout } from "../../store/reducers/tasks/action-creators"
import { useTypedSelector } from "../../hooks/useTypedSelector"

interface TTaskItemProps {
    task: Task
}


const TaskItem: FC<TTaskItemProps> = ({ task }) => {

    const { title, category } = task

    const dispatch = useDispatch()
    const [isShowChevron, setIsShowChevron] = useState<boolean>(false)
    const routerPath = useRouterPath()

    const { user: { createdTasksGroup } }: any = useTypedSelector(state => state.profile)


    const toggleShowTaskInfo = (e: any) => {
        if (e.target.id) {
            dispatch(openTaskInfoAbout(true))
            dispatch(getInfoCurrentTask({ groupName: routerPath, taskId: task.id }))
        }

    }


    const toggleShowChevron = () => setIsShowChevron(!isShowChevron)


    return (
        <div id={ `customContextmenuArea${ task.id }` } className="task__item" onClick={ (e) => toggleShowTaskInfo(e) }>
            <CustomContextMenu
                taskId={ task.id }
                targetId={ `customContextmenuArea${ task.id }` }
                options={ contextMenuItems.contextMenuItems }
                innerOptions={ createdTasksGroup }
                classes={ {
                    listWrapper: 'customContextmenuArea1ListWrapper',
                    listItem: 'customContextmenuArea1ListItem'
                } }
            />
            <div className="task__info-wrapper">

                <span className="add__task-icon-blue" onMouseEnter={ toggleShowChevron }
                      onMouseLeave={ toggleShowChevron }>
                    { isShowChevron ? <ChevronDown/> : null }
                </span>

                <div className="task__info">
                    <p className="task__title">{ title }</p>
                    <p className="task__category">{ category }</p>
                </div>
            </div>

            <div className="task__icon-favorite">
                <IconStar/>
            </div>
        </div>
    )
}

export default TaskItem