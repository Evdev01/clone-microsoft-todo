import React, { FC } from 'react'
import './BurgerMenu.scss'

interface TBurgerMenuProps {
    openBurgerMenu: () => void
}


const BurgerMenu: FC<TBurgerMenuProps> = ({ openBurgerMenu }) => {
    return <button onClick={ openBurgerMenu } className="burger">
        <span className="burger__item">Menu</span>
    </button>
}

export default BurgerMenu