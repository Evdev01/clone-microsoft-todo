import React, { FC, useEffect, useRef, useState } from 'react'
import './AddTaskPanel.scss'
import AddIcon from "../svg/AddIcon"
import EntryBarTask from "../EntryBarTask/EntryBarTask"
import { useDispatch } from "react-redux"
import { createNewTask } from "../../store/reducers/tasks/action-creators"

const AddTaskPanel: FC = () => {

    const dispatch = useDispatch()
    const createTaskInput: any = useRef(null)
    const [newTaskValue, setNewTaskValue] = useState<string>('')
    const [addTask, setAddTask] = useState<boolean>(false)
    const [isActiveAddTaskButton, setIsActiveAddTaskButton] = useState<boolean>(false)

    useEffect(() => {
        setIsActiveAddTaskButton(!!newTaskValue ?? false)
    }, [newTaskValue])

    const creatTask = () => {
        dispatch(createNewTask({
            id: new Date().getUTCMilliseconds(),
            title: newTaskValue
        }))
        setNewTaskValue('')
        createTaskInput.current.focus()
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') creatTask()
    }


    return (
        <div className="add__panel-wrapper">

            <div className="add_task-panel-wrapper">
                <div className="add__task-panel">
                    { !addTask ? <AddIcon/> : <span className="add__task-icon"></span> }
                    { !addTask ? <p onClick={ () => setAddTask(!addTask) }>Добавить задачу</p> :
                        <input onKeyDown={e => handleKeyDown(e)} ref={createTaskInput} value={ newTaskValue } onChange={ e => setNewTaskValue(e.target.value) } type="text"
                               autoFocus={ addTask } placeholder="Добавить задачу"/> }
                </div>
            </div>
            {
                addTask ? <EntryBarTask creatTask={creatTask} isActiveAddTaskButton={ isActiveAddTaskButton }/> : null
            }

        </div>
    )
}

export default AddTaskPanel