import React, { FC, FocusEventHandler, useEffect, useState } from 'react'
import './TaskTitleInput.scss'
import ChevronDown from "../svg/ChevronDown"
import IconStar from "../svg/IconStar"
import { useTypedSelector } from "../../hooks/useTypedSelector"
import { useDispatch } from "react-redux"
import { changeInfoTask } from "../../store/reducers/tasks/action-creators"

interface TTaskTitleInput {
    isShowChevron: boolean
    toggleShowChevron: () => void
}

const TaskTitleInput: FC<TTaskTitleInput> = ({ isShowChevron, toggleShowChevron }) => {

    const dispatch = useDispatch()
    const [taskTitle, setTaskTitle] = useState('')
    const { taskInfo }: any = useTypedSelector(state => state.tasks)


    useEffect(() => {
        setTaskTitle(taskInfo.title)
    },[taskInfo])


    const [isActiveInput, setIsActiveInput] = useState(false)
    const onFocusInput = (event: FocusEventHandler<HTMLInputElement> | any) => {
        setIsActiveInput(!isActiveInput)
    }

    const onBlurInput = (event: FocusEventHandler<HTMLInputElement> | any) => {
        setIsActiveInput(!isActiveInput)
        let taskItem = {...taskInfo}
        taskItem.title = taskTitle
            dispatch(changeInfoTask(taskItem))
    }


    return (
        <div className="task__info-block-header-wrapper">
            <div>
                <div className="task__info-block-header-info">
                        <span className="add__task-icon-blue" onMouseEnter={ toggleShowChevron }
                              onMouseLeave={ toggleShowChevron }>
                                            { isShowChevron ? <ChevronDown/> : null }
                        </span>
                    <input onFocus={ onFocusInput }
                           value={taskTitle}
                           onChange={(e) => setTaskTitle(e.target.value)}
                           onBlur={ onBlurInput }
                           className={ !isActiveInput ? 'input__task_edit' : 'input__task_edit active' } type="text"
                           placeholder={taskTitle}/>
                </div>
            </div>
            <IconStar/>
        </div>
    )
}

export default TaskTitleInput