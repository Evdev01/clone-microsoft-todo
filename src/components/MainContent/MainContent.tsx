import React, { FC, useState } from 'react'
import './MainContent.scss'
import MainContentTop from "../MainContentTop"
import SideBar from "../SideBar/SideBar"
import TasksContent from "../TasksContent/TasksContent"

interface TMainContentProps {
}

const MainContent: FC = () => {

    const [isShowSideBar, setIsShowSideBar] = useState<boolean>(false)

    const openBurgerMenu = () => setIsShowSideBar(!isShowSideBar)

    return (
        <div className="main__content-wrapper">
            <MainContentTop openBurgerMenu={ openBurgerMenu } isShowSideBar={ isShowSideBar }/>

            <div className="content__wrapper">
                { isShowSideBar
                    ? <SideBar openBurgerMenu={ openBurgerMenu } isShowSideBar={ isShowSideBar }/>
                    : null }
                <TasksContent/>
            </div>
        </div>
    )
}

export type { TMainContentProps }
export default MainContent