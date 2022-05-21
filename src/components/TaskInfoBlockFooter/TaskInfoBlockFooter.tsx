import React, { FC } from 'react'
import './TaskInfoBlockFooter.scss'
import ClosePane from "../svg/ClosePane"
import BinIcon from "../svg/BinIcon"
import { useDispatch } from "react-redux"
import { openTaskInfoAbout } from "../../store/reducers/tasks/action-creators"

const TaskInfoBlockFooter: FC = () => {

    const dispatch = useDispatch()


    const toggleShowTaskInfo = () => {
        dispatch(openTaskInfoAbout(false))
    }

    return (
        <div className="task__info-block-footer">

            <div className="task__info-block-footer-item" onClick={ toggleShowTaskInfo }>
                <ClosePane/>
            </div>

            <p>Созданно сегодня</p>

            <div className="task__info-block-footer-item">
                <BinIcon/>
            </div>
        </div>
    )
}

export default TaskInfoBlockFooter