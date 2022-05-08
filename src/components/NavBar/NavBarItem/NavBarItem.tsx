import React, { FC } from 'react'
import './NavBarItem.scss'

interface TNavBarItemProps {
    title: string
}

const NavBarItem: FC<TNavBarItemProps> = ({ children, title }) => {
    return (
        <li>
            <div className="nav__link" title={ title }>
                { children }
            </div>
        </li>
    )
}

export default NavBarItem