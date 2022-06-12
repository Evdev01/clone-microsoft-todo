import React, { FC, ReactElement } from 'react'
import { NavLink } from 'react-router-dom'
import './SideBarItem.scss'
import FormatListIcon from '../svg/FormatListIcon'
import { getSideBarItemInfo, getSideBarItemName } from "../../store/reducers/side-bar/action-creators"
import { useDispatch } from "react-redux"

interface TSideBarItemProps {
    icon?: ReactElement | string
    title: string
    route: string
    id?: any
}


const SideBarItem: FC<TSideBarItemProps> = ({ icon, title, route, id }) => {
    const dispatch = useDispatch()


    const getSideBarItemTitle = (id: number) => {
        dispatch(getSideBarItemInfo({id}))
        dispatch(getSideBarItemName(title))
    }


    return (
        <NavLink to={ route }
                 exact={ true }
                 onClick={ () => getSideBarItemTitle(id) }
                 className="side__bar-item-link"
                 activeClassName="side__bar-item-link-active">
            <div className="side__bar-item">
                <div className="side__bar-inner">
                    <span>{ icon ?? <FormatListIcon/> }</span>
                    <p>{ title }</p>
                </div>
                <p>3</p>
            </div>
        </NavLink>

    )
}

export default SideBarItem