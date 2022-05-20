import React, { FC, FocusEventHandler, useState } from 'react'
import './TaskTitleInput.scss'
import ChevronDown from "../svg/ChevronDown"
import IconStar from "../svg/IconStar"

interface TTaskTitleInput {
    isShowChevron: boolean
    toggleShowChevron: () => void
}

const TaskTitleInput: FC<TTaskTitleInput> = ({ isShowChevron, toggleShowChevron }) => {

    const [isActiveInput, setIsActiveInput] = useState(false)
    const toggleFocusInput = (event: FocusEventHandler<HTMLInputElement> | any) => setIsActiveInput(!isActiveInput)


    return (
        <div className="task__info-block-header-wrapper">
            <div>
                <div className="task__info-block-header-info">
                        <span className="add__task-icon-blue" onMouseEnter={ toggleShowChevron }
                              onMouseLeave={ toggleShowChevron }>
                                            { isShowChevron ? <ChevronDown/> : null }
                        </span>
                    <input onFocus={ toggleFocusInput }
                           onBlur={ toggleFocusInput }
                           className={ !isActiveInput ? 'input__task_edit' : 'input__task_edit active' } type="text"
                           placeholder="placeholder"/>
                </div>
            </div>
            <IconStar/>
        </div>
    )
}

export default TaskTitleInput