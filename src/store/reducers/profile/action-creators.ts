import { Dispatch } from "redux"
import { ProfileStateAction, ProfileStateEnum } from "./types"

interface infoForDeleteTask {
    groupName: string
    taskId: number
}

export const deleteTask = (info: infoForDeleteTask) => (dispatch: Dispatch<ProfileStateAction>) => {
    dispatch({ type: ProfileStateEnum.REMOVE_TASK_BY_ID, payload: info })
}

export const createNewTask = (newTask: any) => (dispatch: Dispatch<ProfileStateAction>) => {
    dispatch({ type: ProfileStateEnum.CREATE_NEW_TASK, payload: newTask })
}

export const getInfoCurrentTask = (currentTask: any) => (dispatch: Dispatch<ProfileStateAction>) => {
    dispatch({ type: ProfileStateEnum.GET_INFO_CURRENT_TASK, payload: currentTask })
}

export const changeInfoTask = (taskInfo: {}) => (dispatch: Dispatch<ProfileStateAction>) => {
    dispatch({ type: ProfileStateEnum.CHANGE_INFO_TASK, payload: taskInfo })
}

export const createNewTaskGroup = (newGroup: {}) => (dispatch: Dispatch<ProfileStateAction>) => {
    dispatch({ type: ProfileStateEnum.CREATE_NEW_GROUP_TASK, payload: newGroup })
}

export const moveTaskGroup = (taskGroup: {}) => (dispatch: Dispatch<ProfileStateAction>) => {
    dispatch({ type: ProfileStateEnum.MOVE_TASK_GROUP, payload: taskGroup })
}


export const toggleCompletedTask = (task: {}) => (dispatch: Dispatch<ProfileStateAction>) => {
    dispatch({ type: ProfileStateEnum.TASK_IS_DONE, payload: task })
}

