import { Dispatch } from "redux"
import { TasksStateAction, TasksStateEnum } from "./types"

export const openTaskInfoAbout = (value: boolean) => (dispatch: Dispatch<TasksStateAction>) => {
    dispatch({ type: TasksStateEnum.IS_SHOW_TASK_INFO_BLOCK, payload: value})
}

