import React, { FC, useState } from 'react'
import './TaskItem.scss'
import IconStar from "../svg/IconStar"
import ChevronDown from "../svg/ChevronDown"

interface TTaskItemProps {
    title: string
    category: string
}


const TaskItem: FC<TTaskItemProps> = ({ title, category }) => {

    const [isShowChevron, setIsShowChevron] = useState<boolean>(false)

    const toggleShowChevron = () => setIsShowChevron(!isShowChevron)

    return (
        <div className="task__item">
            <div className="task__info-wrapper">

                <span className="add__task-icon-blue" onMouseEnter={ toggleShowChevron }
                      onMouseLeave={ toggleShowChevron }>
                    { isShowChevron ? <ChevronDown/> : null }
                </span>

                <div className="task__info">
                    <p className="task__title">{ title }</p>
                    <p className="task__category">{ category }</p>
                </div>
            </div>

            <div className="task__icon-favorite">
                <IconStar/>
            </div>
        </div>
    )
}

export default TaskItem