// todo add correct type

export type TTask = {
    id?: number
    title?: string
    important?: boolean
}

export type TTaskGroup = {
    id?: number
    groupName?: string
    route?: string
    tasksItems?: TTask[]
    completedTasks: TTask[]
}

export type ProfileState = {
    user: {
        name: string,
        surName: string,
        email: string,
        currentTask?: {},
        mainTasksGroup: TTaskGroup[],
        createdTasksGroup: TTaskGroup[]
    }
}

export enum ProfileStateEnum {
    GET_PROFILE_INFO = "GET_PROFILE_INFO",
    REMOVE_TASK_BY_ID = "REMOVE_TASK_BY_ID",
    CREATE_NEW_TASK = "CREATE_NEW_TASK",
    GET_INFO_CURRENT_TASK = "GET_INFO_CURRENT_TASK",
    CHANGE_INFO_TASK = "CHANGE_INFO_TASK",
    CREATE_NEW_GROUP_TASK = "CREATE_NEW_GROUP_TASK",
    MOVE_TASK_GROUP = "MOVE_TASK_GROUP",
    TASK_IS_DONE = "TASK_IS_DONE",
    ADD_TASK_IN_IMPORTANT = "ADD_TASK_IN_IMPORTANT",
    DELETE_TASK_GROUP = "DELETE_TASK_GROUP"
}

export interface GetInfoAboutProfile {
    type: ProfileStateEnum.GET_PROFILE_INFO
    payload?: {}
}

export interface RemoveTaskById {
    type: ProfileStateEnum.REMOVE_TASK_BY_ID
    payload?: {}
}

export interface CreateNewTask {
    type: ProfileStateEnum.CREATE_NEW_TASK
    payload?: {}
}

export interface GetTaskInfo {
    type: ProfileStateEnum.GET_INFO_CURRENT_TASK
    payload?: {}
}


export interface ChangeTaskInfo {
    type: ProfileStateEnum.CHANGE_INFO_TASK
    payload?: {}
}

export interface CreateNewGroupTask {
    type: ProfileStateEnum.CREATE_NEW_GROUP_TASK
    payload?: {}
}

export interface MoveTaskGroup {
    type: ProfileStateEnum.MOVE_TASK_GROUP
    payload?: {}
}

export interface CompleteTask {
    type: ProfileStateEnum.TASK_IS_DONE
    payload?: {}
}

export interface AddTaskInImportant {
    type: ProfileStateEnum.ADD_TASK_IN_IMPORTANT
    payload?: {}
}

export interface DeleteTaskGroup {
    type: ProfileStateEnum.DELETE_TASK_GROUP
    payload?: number
}


export type ProfileStateAction =
    GetInfoAboutProfile
    | RemoveTaskById
    | CreateNewTask
    | GetTaskInfo
    | ChangeTaskInfo
    | CreateNewGroupTask
    | MoveTaskGroup
    | CompleteTask
    | AddTaskInImportant
    | DeleteTaskGroup