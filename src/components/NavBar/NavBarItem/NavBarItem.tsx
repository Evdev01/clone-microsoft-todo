import React, { FC } from 'react'
import './NavBarItem.scss'

interface NavBarItemProps {
    title: string
}

const NavBarItem: FC<NavBarItemProps> = ({ children, title }) => {
    return (
        <li>
            <div className="nav__link" title={ title }>
                { children }
            </div>
        </li>
    )
}

export default NavBarItem