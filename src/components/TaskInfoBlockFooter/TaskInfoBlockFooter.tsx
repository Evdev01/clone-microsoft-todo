import React, { FC } from 'react'
import './TaskInfoBlockFooter.scss'
import ClosePane from "../svg/ClosePane"
import BinIcon from "../svg/BinIcon"

const TaskInfoBlockFooter: FC = () => {
    return (
        <div className="task__info-block-footer">

            <div className="task__info-block-footer-item">
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