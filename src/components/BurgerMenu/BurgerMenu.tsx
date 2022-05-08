import React, { FC } from 'react'
import './BurgerMenu.scss'

const BurgerMenu: FC = () => {
    return <button className="burger">
        <span className="burger__item">Menu</span>
    </button>
}

export default BurgerMenu