import React, { FC, FocusEventHandler, useState } from 'react'
import './SideBarCreateList.scss'
import AddIcon from '../svg/AddIcon'
import AddGroupIcon from '../svg/AddGroupIcon'
import { useDispatch } from "react-redux"
import { createNewTaskGroup } from "../../store/reducers/profile/action-creators"

const SideBarCreateList: FC = () => {

    const [isActiveInput, setIsActiveInput] = useState(false)


    const toggleFocusInput = (event: FocusEventHandler<HTMLInputElement> | any) => setIsActiveInput(!isActiveInput)
    const [taskGroupTitle, setTaskGroupTitle] = useState<string>('')

    const dispatch = useDispatch()

    // todo e: React.KeyboardEvent<HTMLInputElement> | MouseEventHandler<HTMLDivElement>


    const handleKeyDown = (e: any) => {
        const createNewTaskList = {
            id: new Date().getUTCMilliseconds(),
            groupName: taskGroupTitle,
            route: taskGroupTitle,
            tasksItems: [],
            completedTasks: []
        }

        if ((e.key === 'Enter' || e.type === 'click') && taskGroupTitle.length) {
            dispatch(createNewTaskGroup(createNewTaskList))
            setTaskGroupTitle('')
        }
    }


    return (
        <div className="side__bar-add-list">
            <div className={ !isActiveInput ? 'side__bar-add-list-wrapper' : 'side__bar-add-list-wrapper active' }>
                <div onClick={ handleKeyDown }>
                    <AddIcon/>
                </div>
                { !isActiveInput ? <p onClick={ () => setIsActiveInput(!isActiveInput) }>Создать список</p> :
                    <div className="side__bar-add-menu-wrapper"><input type="text"
                                                                       onKeyDown={ e => handleKeyDown(e) }
                                                                       onChange={ (e) => setTaskGroupTitle(e.target.value) }
                                                                       className="side__bar-input active"
                                                                       ref={ input => input && input.focus() }
                                                                       placeholder="Создать список"
                                                                       onBlur={ toggleFocusInput }/></div> }
            </div>
            <div className="side__bar-add-icon">
                <AddGroupIcon/>
            </div>
        </div>
    )
}

export default SideBarCreateList