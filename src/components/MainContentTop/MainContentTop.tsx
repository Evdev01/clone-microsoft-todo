import React, { FC } from 'react'
import './MainContentTop.scss'
import BurgerMenu from "../BurgerMenu/BurgerMenu"
import SortIcon from "../svg/SortIcon"
import LightIcon from "../svg/LightIcon"
import ContentBarIcon from "../ContentBarIcon/ContentBarIcon"

interface TMainContentTopProps {
    openBurgerMenu: () => void
    isShowSideBar: boolean
}

const MainContentTop: FC<TMainContentTopProps> = ({ openBurgerMenu, isShowSideBar }) => {

    return (
        <div className="content__header">
            <div className="content__header-wrapper">
                <div className="content__left-menu">
                    {
                        !isShowSideBar
                            ? <BurgerMenu openBurgerMenu={ openBurgerMenu }/>
                            : null
                    }
                    <p className="content__left-my-day">Мой день</p>
                    <p className="content__left-dots">...</p>
                </div>

                <div className="content__right-menu">
                    <ContentBarIcon children={ <SortIcon/> } title={ 'Сортировка' }/>
                    <ContentBarIcon children={ <LightIcon/> } title={ 'Предложения' }/>
                </div>
            </div>
            <span className="content__left-current-date">среда, 4 мая (дата)</span>
        </div>
    )
}

export type { TMainContentTopProps }
export default MainContentTop