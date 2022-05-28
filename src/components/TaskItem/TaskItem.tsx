import React, { FC, useState } from 'react'
import './TaskItem.scss'
import IconStar from "../svg/IconStar"
import ChevronDown from "../svg/ChevronDown"
import { useDispatch } from "react-redux"
import { getInfoCurrentTask, openTaskInfoAbout } from "../../store/reducers/tasks/action-creators"
import { Task } from "../../types/task"
import CustomContextMenu from "../CustomContextmenu/CustomContextMenu"
import contextMenuItems from './ContextMenuItems'
import contextMenuInnerItems from './ContextMenuItems'

interface TTaskItemProps {
    task: Task
}


const TaskItem: FC<TTaskItemProps> = ({ task }) => {

    const { title, category } = task


    const dispatch = useDispatch()
    const [isShowChevron, setIsShowChevron] = useState<boolean>(false)

    const toggleShowTaskInfo = (task: Task) => {
        dispatch(openTaskInfoAbout(true))
        dispatch(getInfoCurrentTask(task.id))
    }


    const toggleShowChevron = () => setIsShowChevron(!isShowChevron)


    return (
        <div id='customContextmenuArea1' className="task__item" onClick={ () => toggleShowTaskInfo(task) } >
                <CustomContextMenu
                    targetId='customContextmenuArea1'
                    options={contextMenuItems.contextMenuItems}
                    innerOptions={contextMenuInnerItems.contextMenuInnerItems}
                    classes={{
                        listWrapper: 'customContextmenuArea1ListWrapper',
                        listItem: 'customContextmenuArea1ListItem'
                    }}
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