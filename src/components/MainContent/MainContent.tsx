import React, { FC, useState } from 'react'
import './MainContent.scss'
import SideBar from '../SideBar/SideBar'
import { Route, Switch } from "react-router-dom"
import MainContentWrapper from "../MainContentWrapper/MainContentWrapper"

interface TMainContentProps {
}

const MainContent: FC = () => {

    const [isShowSideBar, setIsShowSideBar] = useState<boolean>(false)

    const openBurgerMenu = () => setIsShowSideBar(!isShowSideBar)

    return (
        <div className="main__content-wrapper">

            <div className="content__wrapper">
                { isShowSideBar
                    ? <SideBar openBurgerMenu={ openBurgerMenu }/>
                    : null }
                <div className="content__wrapper-content-sidebar">

                    <Switch>
                        <Route exact path="/myday"
                               component={ () => <MainContentWrapper openBurgerMenu={ openBurgerMenu } isShowSideBar={ isShowSideBar } title={'Мой день'}/> }/>

                        <Route path="/important"
                               component={ () => <MainContentWrapper openBurgerMenu={ openBurgerMenu } isShowSideBar={ isShowSideBar } title={'Важно'}/>}/>
                    </Switch>
                </div>
            </div>
        </div>
    )
}

export type { TMainContentProps }
export default MainContent