import React, { FC, useState } from 'react'
import './MainContent.scss'
import MainContentTop from '../MainContentTop'
import SideBar from '../SideBar/SideBar'
import TasksContent from '../TasksContent/TasksContent'

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
                    <MainContentTop openBurgerMenu={ openBurgerMenu } isShowSideBar={ isShowSideBar }/>
                    <TasksContent/>
                </div>
            </div>
        </div>
    )
}

export type { TMainContentProps }
export default MainContent