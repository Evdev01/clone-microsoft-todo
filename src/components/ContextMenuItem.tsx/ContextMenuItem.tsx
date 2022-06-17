import React, { FC } from 'react'
import './ContextMenuItem.scss'
import ChevronRight from "../svg/ChevronRight"
import { useDispatch } from "react-redux"
import { openTaskInfoAbout } from "../../store/reducers/tasks/action-creators"
import { deleteTask, deleteTaskGroup } from "../../store/reducers/profile/action-creators"
import useRouterPath from "../../hooks/UseRouterPath"

interface IContextMenuItemProps {
    option: {
        icon: any
        title: string
        id: number
        innerItem?: {
            icon: any
            title: string
        }
    }
    classes?: any
    setIsShowInnerMenu?: (bol: boolean) => boolean
    taskGroupId: number
    taskId: number
}

const ContextMenuItem: FC<IContextMenuItemProps> = ({
                                                        option: { innerItem, icon, title, id },
                                                        classes,
                                                        setIsShowInnerMenu,
                                                        taskId,
                                                        taskGroupId
                                                    }) => {

    const dispatch = useDispatch()


    const checkInnerItem = () => {
        if (!!innerItem) {
            if (setIsShowInnerMenu) {
                setIsShowInnerMenu(true)
            }
        }
    }

    const routerPath = useRouterPath()

    const getContextMenuItemId = (id: number) => {
        if (id === 11) { // id 11 - deletes the task
            dispatch(deleteTask({ taskId, groupName: routerPath }))
            dispatch(openTaskInfoAbout(false))
        } else if (id === 16) { // id 11 - deletes the task group
            dispatch(deleteTaskGroup(taskGroupId))
        }
    }

    return (
        <div className="custom__context-item-wrapper" onMouseEnter={ checkInnerItem }
             onClick={ () => getContextMenuItemId(id) }
        >
            <div className={ title ? "custom__context-item" : "custom__context-item-hr" }>
                <div className="context-item-wrapper">
                    { icon }
                    { title
                        ? <li key={ title } className={ `istItem ${ classes?.listItem ? classes?.listItem : '' }` }>
                            { title }
                        </li>
                        : null
                    }
                </div>
                { !!innerItem
                    ? <div className="context-item-chevron"><ChevronRight/></div>
                    : null
                }

            </div>
        </div>
    )
}

export default ContextMenuItem