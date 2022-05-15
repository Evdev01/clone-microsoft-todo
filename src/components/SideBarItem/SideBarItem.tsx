import React, { FC, ReactElement } from 'react'
import { NavLink } from 'react-router-dom'
import './SideBarItem.scss'
import FormatListIcon from '../svg/FormatListIcon'
import { getSideBarItemName } from "../../store/reducers/side-bar/action-creators"
import { useDispatch } from "react-redux"

interface TSideBarItemProps {
    icon?: ReactElement | string
    title: string
    route: string
}


const SideBarItem: FC<TSideBarItemProps> = ({ icon, title, route }) => {

    const dispatch = useDispatch()

    const getSideBarItemTitle = () => dispatch(getSideBarItemName(title))


    return (
        <NavLink to={ route }
                 exact={ true }
                 onClick={ getSideBarItemTitle }
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