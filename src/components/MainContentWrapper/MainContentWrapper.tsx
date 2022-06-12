import React, { FC } from 'react'
import './MainContentWrapper.scss'
import MainContentTop from "../MainContentTop"
import TasksContent from "../TasksContent"

interface TMainContentWrapperProps {
    openBurgerMenu: () => void
    isShowSideBar: boolean
    title?: string
}

const MainContentWrapper: FC<TMainContentWrapperProps> = ({ openBurgerMenu, isShowSideBar, title }) => {


    return (
        <div className='main__content-wrapper-wrap'>
            <MainContentTop openBurgerMenu={ openBurgerMenu } isShowSideBar={ isShowSideBar } title={ title }/>
            <TasksContent/>
        </div>
    )
}

export default MainContentWrapper