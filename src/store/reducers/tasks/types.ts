import { Task } from "../../../types/task"

export type TasksState = {
    all_tasks: []
    isShowBlock: boolean
    taskInfo: Task | {}
}

export enum TasksStateEnum {
    IS_SHOW_TASK_INFO_BLOCK = "IS_SHOW_TASK_INFO_BLOCK",
}

export interface GetTaskInfoList {
    type: TasksStateEnum.IS_SHOW_TASK_INFO_BLOCK
    payload?: boolean
}


export type TasksStateAction = GetTaskInfoList