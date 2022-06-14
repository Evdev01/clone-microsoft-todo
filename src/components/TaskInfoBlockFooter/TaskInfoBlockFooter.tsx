import React, { FC, useCallback } from 'react'
import './TaskInfoBlockFooter.scss'
import ClosePane from "../svg/ClosePane"
import BinIcon from "../svg/BinIcon"
import { useDispatch } from "react-redux"
import { openTaskInfoAbout } from "../../store/reducers/tasks/action-creators"
import { useTypedSelector } from "../../hooks/useTypedSelector"
import { deleteTask } from "../../store/reducers/profile/action-creators"
import useRouterPath from "../../hooks/UseRouterPath"

const TaskInfoBlockFooter: FC = () => {

    const dispatch = useDispatch()
    const { user: { currentTask } }: any = useTypedSelector(state => state.profile)

    const routerPath = useRouterPath()


    const deleteCurrentTask = useCallback(() => {
        dispatch(deleteTask({ taskId: currentTask.id, groupName: routerPath }))
        toggleShowTaskInfo()
    }, [currentTask])



    const toggleShowTaskInfo = useCallback(() => {
        dispatch(openTaskInfoAbout(false))
    }, [])

    return (
        <div className="task__info-block-footer">

            <div className="task__info-block-footer-item" onClick={ toggleShowTaskInfo }>
                <ClosePane/>
            </div>

            <p>Созданно сегодня</p>

            <div className="task__info-block-footer-item" onClick={ deleteCurrentTask }>
                <BinIcon/>
            </div>
        </div>
    )
}

export default TaskInfoBlockFooter