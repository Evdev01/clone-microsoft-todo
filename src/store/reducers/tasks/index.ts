import { TasksState, TasksStateAction, TasksStateEnum } from "./types"

const initialState: TasksState = {
    all_tasks: [],
    isShowBlock: false,
    taskInfo: {}
}

const tasksReducer = (state = initialState, action: TasksStateAction) => {
    switch (action.type) {
        case TasksStateEnum.IS_SHOW_TASK_INFO_BLOCK:
            return { ...state, isShowBlock: action.payload }
        default:
            return state
    }
}

export default tasksReducer