import React, { FC, useState } from 'react'
import './TasksBlockCollapsed.scss'
import ChevronRight from "../svg/ChevronRight"

const TasksBlockCollapsed:FC = () => {

    const [isShowCollapsed, setIsShowCollapsed] = useState(false)

    return (
        <div className="tasks__block-collapsed">
                <span className={ `open__close-arrow ${ isShowCollapsed ? 'closed' : '' }` }
                      onClick={ () => setIsShowCollapsed(!isShowCollapsed) }>
                        <ChevronRight/>
                </span>
            <span>Завершенные</span>
            <h3>13</h3>
        </div>
    )
}

export default TasksBlockCollapsed