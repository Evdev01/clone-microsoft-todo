import React, { FC } from 'react'
import './ContextMenuInnerItem.scss'
import BulletedIcon from "../svg/BulletedIcon"
import { useDispatch } from "react-redux"
import { moveTaskGroup } from "../../store/reducers/profile/action-creators"
import { useTypedSelector } from "../../hooks/useTypedSelector"

interface TContextMenuItemProps {
    title: string
    classes: any
    groupId: number
    taskId: number
}

const ContextMenuInnerItem:FC<TContextMenuItemProps> = ({title, classes, groupId, taskId}) => {

    const dispatch = useDispatch()

    const { currentSideBarItem }: any = useTypedSelector(state => state.sideBar)


    const moveTaskGrp= () => {
        dispatch(moveTaskGroup({groupId: currentSideBarItem.id, taskId, moveGroupId: groupId}))
    }

    return (
            <div className='contextMenu__inner-item' onClick={moveTaskGrp}>
                <div className="context-item-wrapper">
                    <BulletedIcon/>
                    { title
                        ? <li key={ title } className={ `istItem ${ classes?.listItem }` }>
                            { title }
                        </li>
                        : null
                    }
                </div>
            </div>
    )
}

export default ContextMenuInnerItem