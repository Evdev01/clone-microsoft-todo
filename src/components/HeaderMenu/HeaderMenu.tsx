import React, { FC, useCallback, useState } from 'react'
import './HeaderMenu.scss'
import DotsMenuIcon from "../svg/DotsMenuIcon"
import MicrosoftCatalog from "../MicrosoftCatalog"

const HeaderMenu:FC = () => {

    const [isShowMicrosoftMenu, setIsShowMicrosoftMenu] = useState<boolean>(false)

    const toggleShowMicrosoftMenu = useCallback(() => {
        setIsShowMicrosoftMenu(!isShowMicrosoftMenu)
    }, [isShowMicrosoftMenu])



    return <div className="nav__header">
        <div className="nav__menu" title='Средство для запуска приложения' onClick={toggleShowMicrosoftMenu}>
            <DotsMenuIcon/>
        </div>
        {isShowMicrosoftMenu ? <MicrosoftCatalog toggleShowMicrosoftMenu={toggleShowMicrosoftMenu}/> : null}
        <p className="header__logo">
            To do
        </p>
    </div>
}

export default HeaderMenu