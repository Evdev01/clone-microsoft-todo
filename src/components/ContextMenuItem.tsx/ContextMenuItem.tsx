import React, { FC } from 'react'
import './ContextMenuItem.scss'
import ChevronRight from "../svg/ChevronRight"
import { useDispatch } from "react-redux"
import { deleteTaskById, openTaskInfoAbout } from "../../store/reducers/tasks/action-creators"

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
    classes: any
    setIsShowInnerMenu: (bol: boolean) => boolean
    taskId: number
}

const ContextMenuItem: FC<IContextMenuItemProps> = ({ option: {innerItem, icon, title, id}, classes, setIsShowInnerMenu, taskId  }) => {

    const dispatch = useDispatch()


    const checkInnerItem = () => {
        if (!!innerItem) {
            setIsShowInnerMenu(true)
        }
    }


    const getContextMenuItemId = (id: number) => {
        if (id === 11) {
            dispatch(deleteTaskById(taskId))
            dispatch(openTaskInfoAbout(false))
        }
    }

    return (
        <div className='custom__context-item-wrapper' onMouseEnter={ checkInnerItem } onClick={() => getContextMenuItemId(id)}
             >
            <div className={ title ? "custom__context-item" : "custom__context-item-hr" }>
                <div className="context-item-wrapper">
                { icon }
                { title
                    ? <li key={ title } className={ `istItem ${ classes?.listItem }` }>
                        { title }
                    </li>
                    : null
                }
                </div>

                {!!innerItem
                    ? <div className='context-item-chevron'><ChevronRight/></div>
                    : null
                }

            </div>
        </div>
    )
}

export default ContextMenuItem