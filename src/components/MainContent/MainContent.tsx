import React, { FC } from 'react'
import './MainContent.scss'
import MainContentTop from "../MainContentTop"
import AddTaskBlock from "../AddTaskBlock"
import TasksBlock from "../TasksBlock/TasksBlock"

interface TMainContentProps {
}

const MainContent: FC = () => {
    return (
        <div className="main__content-wrapper">
            <MainContentTop/>
            <div className="main__content-tasks-wrapper">
                <AddTaskBlock/>
                <TasksBlock/>
                <div className="background__lines-wrapper">

                </div>
            </div>
        </div>
    )
}

export type { TMainContentProps }
export default MainContent