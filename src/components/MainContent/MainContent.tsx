import React, { FC, useCallback, useState } from 'react'
import './MainContent.scss'
import SideBar from '../SideBar'
import { Route, Switch } from "react-router-dom"
import MainContentWrapper from "../MainContentWrapper"
import { useTypedSelector } from "../../hooks/useTypedSelector"
import TaskInfoBlock from "../TaskInfoBlock"
import UserSettingMenu from "../UserSettingMenu"
import CallBackMenu from "../CallBackMenu"
import NewsPanelMenu from "../NewsPanelMenu"
import ProfilePanelMenu from "../ProfilePanelMenu"

interface IMainContentProps {
}

const MainContent: FC = () => {


    const { title } = useTypedSelector(state => state.sideBar)
    const { isShowBlock } = useTypedSelector(state => state.tasks)
    const { isShowSidebarMenu } = useTypedSelector(state => state.sideBar)

    const [isShowSideBar, setIsShowSideBar] = useState<boolean>(false)

    const openBurgerMenu = useCallback(() => {
        setIsShowSideBar(!isShowSideBar)
    }, [isShowSideBar])

    const renderComponent = useCallback(() => {
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
    }, [isShowSidebarMenu])

    return (
        <div className="main__content-wrapper">

            <div className="content__wrapper">
                { isShowSideBar
                    ? <SideBar openBurgerMenu={ openBurgerMenu } setIsShowSideBar={ setIsShowSideBar }/>
                    : null }
                <div className="content__wrapper-content-sidebar">

                    <Switch>
                        <Route path={ '' }
                               component={ () => <MainContentWrapper openBurgerMenu={ openBurgerMenu }
                                                                     isShowSideBar={ isShowSideBar }
                                                                     title={ title }/> }/>
                    </Switch>
                </div>
                { isShowBlock ? <TaskInfoBlock/> : null }
                {isShowSidebarMenu
                    ?
                        <div className="main__content-wrapper-menus">
                            { renderComponent() }
                    </div>
                    : null
                }

            </div>
        </div>
    )
}

export type { IMainContentProps }
export default MainContent