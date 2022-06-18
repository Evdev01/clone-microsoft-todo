import React, { FC, useState } from 'react'
import './MainContentTop.scss'
import BurgerMenu from "../BurgerMenu/BurgerMenu"
import SortIcon from "../svg/SortIcon"
import LightIcon from "../svg/LightIcon"
import ContentBarIcon from "../ContentBarIcon/ContentBarIcon"
import SortMenu from "../SortMenu/SortMenu"
import MenuWrapper from "../MenuWrapper/MenuWrapper"
import useRouterPath from "../../hooks/UseRouterPath"

interface IMainContentTopProps {
    openBurgerMenu: () => void
    isShowSideBar: boolean
    title?: string
}

const MainContentTop: FC<IMainContentTopProps> = ({ openBurgerMenu, isShowSideBar, title }) => {


    const [isShowSortMenu, setIsShowSortMenu] = useState<boolean>(false)
    const routerPath = useRouterPath()

    const toggleSortMenu = () => {
        setIsShowSortMenu(!isShowSortMenu)
    }

    const checkClickOutSide = (str: string) => {
        if (str === 'outside') {
            setIsShowSortMenu(!isShowSortMenu)
        }
    }

    return (
        <div className="content__header">
            <div className="content__header-wrapper">
                <div className="content__left-menu">
                    {
                        !isShowSideBar
                            ? <BurgerMenu openBurgerMenu={ openBurgerMenu }/>
                            : null
                    }
                    <p className="content__left-my-day">{ title || routerPath }</p>
                    <p className="content__left-dots">...</p>
                </div>

                <div className="content__right-menu">
                    <div className='content__right-sort-menu'>
                        <ContentBarIcon children={ <SortIcon/> } title={ 'Сортировка' } toggleSortMenu={toggleSortMenu}/>
                        {isShowSortMenu ?  <MenuWrapper checkClickOutSide={checkClickOutSide} headerTitle={'Порядок сортировки'} children={<SortMenu/>}/>  : null}
                    </div>
                    <ContentBarIcon children={ <LightIcon/> } title={ 'Предложения' }/>
                </div>

            </div>
            <span className={ !isShowSideBar ? 'content__left-current-date' : 'content__left-current-date-subline' }>среда, 4 мая (дата)</span>
        </div>
    )
}

export type { IMainContentTopProps }
export default MainContentTop