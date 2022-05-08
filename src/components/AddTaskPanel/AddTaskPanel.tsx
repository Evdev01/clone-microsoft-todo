import React, { FC, useState } from 'react'
import './AddTaskPanel.scss'
import AddIcon from "../svg/AddIcon"
import EntryBarTask from "../EntryBarTask/EntryBarTask"

const AddTaskPanel: FC = () => {

    const [addTask, setAddTask] = useState(false)

    return (
        <div className="add__panel-wrapper">

            <div className="add_task-panel-wrapper">
                <div className="add__task-panel">
                    { !addTask ? <AddIcon/> : <span className="add__task-icon"></span> }
                    { !addTask ? <p onClick={ () => setAddTask(!addTask) }>Добавить задачу</p> :
                        <input type="text" autoFocus={ addTask } placeholder="Добавить задачу"/> }
                </div>
            </div>
            {
                addTask ? <EntryBarTask/> : null
            }

        </div>
    )
}

export default AddTaskPanel