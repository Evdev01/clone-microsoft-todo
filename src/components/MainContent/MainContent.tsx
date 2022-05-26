import React, { FC, useState } from 'react'
import './MainContent.scss'
import SideBar from '../SideBar/SideBar'
import { Redirect, Route, Switch } from "react-router-dom"
import MainContentWrapper from "../MainContentWrapper/MainContentWrapper"
import { useTypedSelector } from "../../hooks/useTypedSelector"
import TaskInfoBlock from "../TaskInfoBlock/TaskInfoBlock"
import UserSettingMenu from "../UserSettingMenu/UserSettingMenu"
import CallBackMenu from "../CallBackMenu/CallBackMenu"
import NewsPanelMenu from "../NewsPanelMenu/NewsPanelMenu"
import ProfilePanelMenu from "../ProfilePanelMenu/ProfilePanelMenu"

interface TMainContentProps {
}

const MainContent: FC = () => {


    const { title } = useTypedSelector(state => state.sideBar)
    const { isShowBlock } = useTypedSelector(state => state.tasks)
    const { isShowSidebarMenu } = useTypedSelector(state => state.sideBar)

    const [isShowSideBar, setIsShowSideBar] = useState<boolean>(false)

    const openBurgerMenu = () => setIsShowSideBar(!isShowSideBar)

    const renderComponent = () => {
        let renderComponent = null

        if (isShowSidebarMenu === 'openUserSettings') {
            renderComponent = <UserSettingMenu/>
        } else if (isShowSidebarMenu === 'openFeedBack') {
            renderComponent = <CallBackMenu/>
        } else if (isShowSidebarMenu === 'newPossibilities') {
            renderComponent = <NewsPanelMenu/>
        } else if (isShowSidebarMenu === 'openProfile') {
            renderComponent = <ProfilePanelMenu/>
        }

        return renderComponent
    }


    return (
        <div className="main__content-wrapper">

            <div className="content__wrapper">
                { isShowSideBar
                    ? <SideBar openBurgerMenu={ openBurgerMenu }/>
                    : null }
                <div className="content__wrapper-content-sidebar">

                    <Switch>
                        <Route exact path={ '/' }
                               component={ () => <MainContentWrapper openBurgerMenu={ openBurgerMenu }
                                                                     isShowSideBar={ isShowSideBar }
                                                                     title={ 'Мой день' }/> }/>

                        <Route path={ '' }
                               component={ () => <MainContentWrapper openBurgerMenu={ openBurgerMenu }
                                                                     isShowSideBar={ isShowSideBar }
                                                                     title={ title }/> }/>
                        <Redirect to="/"/>
                    </Switch>
                </div>
                { isShowBlock ? <TaskInfoBlock/> : null }
                { renderComponent() }
            </div>
        </div>
    )
}

export type { TMainContentProps }
export default MainContent