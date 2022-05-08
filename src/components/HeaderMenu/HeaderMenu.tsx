import React, { FC } from 'react'
import './HeaderMenu.scss'
import DotsMenuIcon from "../svg/DotsMenuIcon"

const HeaderMenu:FC = () => {
    return <div className="nav__header">
        <div className="nav__menu" title='Средство для запуска приложения'>
            <DotsMenuIcon/>
        </div>

        <p className="header__logo">
            To do
        </p>
    </div>
}

export default HeaderMenu