import React, { FC, ReactElement, useCallback, useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './SideBarItem.scss'
import FormatListIcon from '../svg/FormatListIcon'
import { getSideBarItemInfo } from "../../store/reducers/side-bar/action-creators"
import { useDispatch } from "react-redux"
import contextMenuItems from './SideBarContextItems'
import ContextMenuItem from "../ContextMenuItem.tsx/ContextMenuItem"


interface ISideBarItemProps {
    icon?: ReactElement | string
    title: string
    route: string
    id?: any
    // todo change types
    taskGroup?: any
}


const SideBarItem: FC<ISideBarItemProps> = ({ icon, title, route, id, taskGroup }) => {

    const dispatch = useDispatch()
    const [anchorPoint, setAnchorPoint] = useState({ visible: false, x: 0, y: 0 })

    const getSideBarItemTitle = (id: number) => {
        dispatch(getSideBarItemInfo({ id }))
    }

    const ref: any = useRef<HTMLInputElement>(null)
    const contextRef= useRef(null);


    const handleContextMenu = useCallback(
        (event) => {
            const targetElement = ref.current
            if (targetElement && targetElement.contains(event.target)) {
                event.preventDefault()
                setAnchorPoint({ visible: true, x: event.pageX, y: event.pageY - 50 })
                    // @ts-ignore
            } else if (contextRef.current && !contextRef.current.contains(event.target)) {
                setAnchorPoint({ ...anchorPoint, visible: false })
            }
        },
        [anchorPoint]
    )

    const offClickHandler = (event: {target: any}) => {
        // @ts-ignore
        if (contextRef.current && !contextRef.current.contains(event.target)) {
            setAnchorPoint({ ...anchorPoint, visible: false })
        }
    }

    useEffect(() => {
        document.addEventListener("contextmenu", handleContextMenu)
        document.addEventListener('click', offClickHandler)

        return () => {
            document.removeEventListener("contextmenu", handleContextMenu)
            document.removeEventListener('click', offClickHandler)
        }
    })


    return (
        <NavLink to={ route }
                 exact={ true }
                 onClick={ () => getSideBarItemTitle(id) }
                 className="side__bar-item-link"
                 activeClassName="side__bar-item-link-active">
            <div className="side__bar-item" ref={ ref } onContextMenu={ (e) => handleContextMenu(e) }>
                <div className="side__bar-inner">
                    <span>{ icon ?? <FormatListIcon/> }</span>
                    <p>{ title }</p>
                </div>
                <p>{ taskGroup ? taskGroup.tasksItems.length : 0 }</p>
                    <div
                        className='side__bar-context-menu'
                        ref={contextRef}
                        style={{
                            display: `${ anchorPoint.visible ? '' : 'none' }`,
                            top: anchorPoint.y,
                            left: anchorPoint.x,
                        }}
                    >
                        {contextMenuItems.sideBarContextItems.map((option: any) => <ContextMenuItem taskGroupId={taskGroup.id} key={option.id} option={option} taskId={option.id}/>)}
                    </div>
            </div>
        </NavLink>

    )
}

export default SideBarItem