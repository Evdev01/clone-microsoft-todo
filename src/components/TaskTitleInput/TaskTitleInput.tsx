import React, { FC, useCallback, useEffect, useState } from 'react'
import './TaskTitleInput.scss'
import ChevronDown from "../svg/ChevronDown"
import IconStar from "../svg/IconStar"
import { useTypedSelector } from "../../hooks/useTypedSelector"
import { useDispatch } from "react-redux"
import { changeInfoTask } from "../../store/reducers/profile/action-creators"
import useRouterPath from "../../hooks/UseRouterPath"

interface TTaskTitleInput {
    isShowChevron: boolean
    toggleShowChevron: () => void
}

const TaskTitleInput: FC<TTaskTitleInput> = ({ isShowChevron, toggleShowChevron }) => {

    const dispatch = useDispatch()
    const [taskTitle, setTaskTitle] = useState('')
    const { user: { currentTask } }: any = useTypedSelector(state => state.profile)

    const routerPath = useRouterPath()


    useEffect(() => {
        setTaskTitle(currentTask.title)
    }, [currentTask])


    const [isActiveInput, setIsActiveInput] = useState(false)


    const onFocusInput = useCallback(() => {
        setIsActiveInput(!isActiveInput)
    }, [isActiveInput])

    const onBlurInput = useCallback(() => {
        setIsActiveInput(!isActiveInput)
        let taskItem = { ...currentTask }
        taskItem.title = taskTitle
        dispatch(changeInfoTask({ groupName: routerPath, taskId: currentTask.id, title: taskTitle }))
    }, [currentTask])


    return (
        <div className="task__info-block-header-wrapper">
            <div>
                <div className="task__info-block-header-info">
                        <span className="add__task-icon-blue" onMouseEnter={ toggleShowChevron }
                              onMouseLeave={ toggleShowChevron }>
                                            { isShowChevron ? <ChevronDown/> : null }
                        </span>
                    <input onFocus={ onFocusInput }
                           value={ taskTitle }
                           onChange={ (e) => setTaskTitle(e.target.value) }
                           onBlur={ onBlurInput }
                           className={ !isActiveInput ? 'input__task_edit' : 'input__task_edit active' } type="text"
                           placeholder={ taskTitle }/>
                </div>
            </div>
            <IconStar/>
        </div>
    )
}

export default TaskTitleInput