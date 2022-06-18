import React, { FC } from 'react'
import './BurgerMenu.scss'

interface IBurgerMenuProps {
    openBurgerMenu: () => void
}


const BurgerMenu: FC<IBurgerMenuProps> = ({ openBurgerMenu }) => {
    return <button onClick={ openBurgerMenu } className="burger">
        <span className="burger__item">Menu</span>
    </button>
}

export default BurgerMenu