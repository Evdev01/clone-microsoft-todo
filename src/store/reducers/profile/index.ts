import { ProfileState, ProfileStateEnum, TTask, TTaskGroup } from "./types"
import {
    copyState,
    copyStateUser,
    filterCompletedItemsById,
    filterTaskItemsById,
    findCompletedItemsById,
    findTaskGroup,
    findTaskItemsById,
    defineTasksGroup
} from "./helperFunctions"

const initialState: ProfileState = {
    user: {
        name: 'Jon',
        surName: 'surName',
        email: 'jon@gmail.com',
        currentTask: {},
        mainTasksGroup: [
            {
                id: 1,
                groupName: 'myday',
                route: 'mydaymyday',
                tasksItems: [
                    { id: 1, title: 'title', important: false }
                ],
                completedTasks: [
                    { id: 2, title: 'titlecompletedtasks', important: false }
                ]
            },
            {
                id: 2,
                groupName: 'important',
                route: 'important',
                tasksItems: [],
                completedTasks: []
            },
            {
                id: 3,
                groupName: 'planned',
                route: 'planned',
                tasksItems: [],
                completedTasks: []
            },
            {
                id: 4,
                groupName: 'assigned_to_me',
                route: 'assigned_to_me',
                tasksItems: [],
                completedTasks: []
            }, {
                id: 5,
                groupName: 'inbox',
                route: 'inbox',
                tasksItems: [],
                completedTasks: []
            },
            {
                id: 6,
                groupName: 'go-work',
                route: 'go-work',
                tasksItems: [],
                completedTasks: []
            },

        ],
        createdTasksGroup: [],
    }
}

const getLocalStorageInfoUser = () => {
    const localStorageInfo = JSON.parse(<string>localStorage.getItem('user'))
    if (localStorageInfo) {
        initialState.user = localStorageInfo.user
    }
}

getLocalStorageInfoUser()

const profileReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ProfileStateEnum.GET_PROFILE_INFO:
            return { ...state }
        case ProfileStateEnum.REMOVE_TASK_BY_ID:
            // @ts-ignore
            const findIndexGroupTask = copyStateUser(state)[defineTasksGroup(action)].findIndex((el: any) => el.groupName === action.payload.groupName)

            let deleteTaskById: any[] = []

            if (!findTaskItemsById(state, action)) {
                deleteTaskById = filterCompletedItemsById(state, action)
                // @ts-ignore
                copyStateUser(state)[defineTasksGroup(action)][findIndexGroupTask].completedTasks = [...deleteTaskById]
            } else {
                deleteTaskById = filterTaskItemsById(state, action)
                // @ts-ignore
                copyStateUser(state)[defineTasksGroup(action)][findIndexGroupTask].tasksItems = [...deleteTaskById]
            }

            // @ts-ignore
            localStorage.setItem('user', JSON.stringify({ ...state }))

            return {
                ...state,
                user: { ...copyStateUser(state) }
            }
        case ProfileStateEnum.CREATE_NEW_TASK:

            findTaskGroup(state, action).tasksItems.push({
                id: action.payload.id,
                title: action.payload.title,
                important: false
            })

            localStorage.setItem('user', JSON.stringify({ ...state }))
            return {
                ...state,
                user: { ...copyStateUser(state) }
            }
        case ProfileStateEnum.ADD_TASK_IN_IMPORTANT:
            let fndTask = findTaskItemsById(state, action)

            if (fndTask) {
                if (fndTask.important) {
                    fndTask.important = false
                    copyStateUser(state).mainTasksGroup[1].tasksItems.filter((el: any) => el.id !== fndTask.id)
                    copyStateUser(state).mainTasksGroup[1].tasksItems = copyStateUser(state).mainTasksGroup[1].tasksItems.filter((el: any) => el.id !== fndTask.id)

                } else {
                    fndTask.important = true
                    copyStateUser(state).mainTasksGroup[1].tasksItems.push(fndTask)
                }
            } else {
                let fndTask = findCompletedItemsById(state, action)

                fndTask.important = !fndTask.important
            }

            localStorage.setItem('user', JSON.stringify({ ...state }))
            return {
                ...state,
                user: { ...copyStateUser(state) }
            }
        case ProfileStateEnum.GET_INFO_CURRENT_TASK:
            let getInfoAboutTask = findTaskItemsById(state, action)

            if (!getInfoAboutTask) {
                getInfoAboutTask = findCompletedItemsById(state, action)
            }

            return {
                ...state,
                user: {
                    ...state.user,
                    currentTask: { ...getInfoAboutTask }
                }
            }
        case ProfileStateEnum.CHANGE_INFO_TASK:
            let changeTitleTask = findTaskItemsById(state, action)

            if (!changeTitleTask) {
                changeTitleTask = findCompletedItemsById(state, action)
            }

            changeTitleTask.title = action.payload.title

            localStorage.setItem('user', JSON.stringify({ ...state }))

            return {
                ...state,
                user: { ...copyStateUser(state) }
            }
        case ProfileStateEnum.TASK_IS_DONE:
            const getGpName = findTaskGroup(state, action)

            const findNeedTask = findTaskItemsById(state, action)

            if (findNeedTask) {
                getGpName.tasksItems = filterTaskItemsById(state, action)
                getGpName.completedTasks.unshift(findNeedTask)
            } else {
                const findNeedTask = findCompletedItemsById(state, action)

                getGpName.completedTasks = filterCompletedItemsById(state, action)
                getGpName.tasksItems.unshift(findNeedTask)
            }

            localStorage.setItem('user', JSON.stringify({ ...state }))

            return {
                ...state,
                user: { ...copyStateUser(state) }
            }
        case ProfileStateEnum.CREATE_NEW_GROUP_TASK:
            copyState(state).user.createdTasksGroup = [...state.user.createdTasksGroup, { ...action.payload }]

            localStorage.setItem('user', JSON.stringify({ ...copyState(state) }))

            return {
                ...state,
                user: { ...copyState(state).user }
            }
        case ProfileStateEnum.DELETE_TASK_GROUP:
            copyState(state).user.createdTasksGroup = copyState(state).user.createdTasksGroup.filter((el: any) => el.id !== action.payload)

            localStorage.setItem('user', JSON.stringify({ ...copyState(state) }))

            return {
                ...state,
                user: { ...copyState(state).user }
            }
        case ProfileStateEnum.MOVE_TASK_GROUP:
            const copy = { ...state.user }

            const findGroup = copy.createdTasksGroup.find((el: any) => el.id === action.payload.groupId)

            // @ts-ignore
            const findTask: TTaskGroup = findGroup.tasksItems.find((el: TTask) => el.id === action.payload.taskId)

            const findMoveGroup = copy.createdTasksGroup.find((el: TTaskGroup) => el.id === action.payload.moveGroupId)

            const findCurrentGroupIndex = copy.createdTasksGroup.findIndex((el: any) => el.id === action.payload.groupId)

            // @ts-ignore
            const removeTask = copy.createdTasksGroup[findCurrentGroupIndex].tasksItems.filter((el: any) => el.id !== action.payload.taskId)
            copy.createdTasksGroup[findCurrentGroupIndex].tasksItems = [...removeTask]

            // @ts-ignore
            findMoveGroup.tasksItems.push(findTask)

            localStorage.setItem('user', JSON.stringify({ ...state }))

            return {
                ...state,
                user: { ...copyStateUser(state) }
            }
        default:
            return state

    }
}


export default profileReducer