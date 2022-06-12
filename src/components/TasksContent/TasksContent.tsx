import React, { FC } from 'react'
import './TasksContent.scss'
import AddTaskBlock from "../AddTaskBlock"
import TasksBlock from "../TasksBlock"

const TasksContent:FC = () => {


    return (
        <div className="main__content-tasks-wrapper">
            <AddTaskBlock/>
            <TasksBlock/>
            <div className="background__lines-wrapper">

            </div>
        </div>
    )
}

export default TasksContent