import React, { FC, FocusEventHandler, useState } from 'react'
import './Header.scss'
import GlobalSearch from "../GlobalSearch/GlobalSearch"
import NavBar from "../NavBar/NavBar"
import HeaderMenu from "../HeaderMenu/HeaderMenu"

const Header: FC = () => {

    const [activeInput, setActiveInput] = useState(false)

    const toggleFocusInput = (event: FocusEventHandler<HTMLInputElement> | any) => setActiveInput(!activeInput)

    return (
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <HeaderMenu/>

                    <GlobalSearch activeInput={ activeInput } toggleFocusInput={ toggleFocusInput }/>

                    <NavBar/>
                </div>
            </div>
        </header>
    )
}

export default Header