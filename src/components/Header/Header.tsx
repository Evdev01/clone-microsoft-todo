import React, { FC, useCallback, useState } from 'react'
import './Header.scss'
import GlobalSearch from "../GlobalSearch"
import NavBar from "../NavBar"
import HeaderMenu from "../HeaderMenu"

const Header: FC = () => {



    const [activeInput, setActiveInput] = useState<boolean>(false)


    const toggleFocusInput = useCallback(() => {
        setActiveInput(!activeInput)
        }, [])

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