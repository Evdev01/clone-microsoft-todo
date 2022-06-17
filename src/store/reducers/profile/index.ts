import { ProfileState, ProfileStateEnum } from "./types"

const defineTasksGroup = (action: any) => {

    const mainTasksGroupsList = [
        {
            groupName: 'myday',
        },
        {
            groupName: 'important',
        },
        {
            groupName: ' planned',
        },
        {
            groupName: 'assigned_to_me',
        },
        {
            groupName: 'inbox',
        },
        {
            groupName: 'go-work',
        },
    ]

    let defineCurrentTaskGroup = ''


    const checkMainGroups = mainTasksGroupsList.find((el: any) => el.groupName === action.payload.groupName)

    if (checkMainGroups) {
        defineCurrentTaskGroup = 'mainTasksGroup'
    } else {
        defineCurrentTaskGroup = 'createdTasksGroup'
    }

    return defineCurrentTaskGroup

}


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


            const copyUser = { ...state.user }

            const findInMainTasksGroup = copyUser.mainTasksGroup.find((el: any) => el.groupName === action.payload.groupName)

            const findInCreatedTasksGroup = copyUser.createdTasksGroup.find((el: any) => el.groupName === action.payload.groupName)

            const getNeedGroupName = findInMainTasksGroup || findInCreatedTasksGroup

            const findNeedTaskInGroup = getNeedGroupName.tasksItems.find((el: any) => el.id === action.payload.taskId)


            // @ts-ignore
            const findIndexGroupTask = copyUser[defineTasksGroup(action)].findIndex((el: any) => el.groupName === action.payload.groupName)


            let deleteTaskById = []

            if (!findNeedTaskInGroup) {
                deleteTaskById = getNeedGroupName.completedTasks.filter((el: any) => el.id !== action.payload.taskId)
                // @ts-ignore
                copyUser[defineTasksGroup(action)][findIndexGroupTask].completedTasks = [...deleteTaskById]
            } else {
                deleteTaskById = getNeedGroupName.tasksItems.filter((el: any) => el.id !== action.payload.taskId)
                // @ts-ignore
                copyUser[defineTasksGroup(action)][findIndexGroupTask].tasksItems = [...deleteTaskById]
            }


            // @ts-ignore
            localStorage.setItem('user', JSON.stringify({ ...state }))

            return {
                ...state,
                user: { ...copyUser }
            }
        case ProfileStateEnum.CREATE_NEW_TASK:

            // @ts-ignore
            const copyStore = { ...state.user }

            // @ts-ignore
            const findTaskGroup = copyStore[defineTasksGroup(action)].find((el: any) => el.groupName === action.payload.groupName)

            findTaskGroup.tasksItems.push({ id: action.payload.id, title: action.payload.title, important: false })

            localStorage.setItem('user', JSON.stringify({ ...state }))
            return {
                ...state,
                user: { ...copyStore }
            }
        case ProfileStateEnum.ADD_TASK_IN_IMPORTANT:

            const cop = { ...state.user }

            // @ts-ignore
            const findTaskGrp = cop[defineTasksGroup(action)].find((el: any) => el.groupName === action.payload.groupName)

            let fndTask = findTaskGrp.tasksItems.find((el: any) => el.id === action.payload.taskId)


            if (fndTask) {
                if (fndTask.important) {
                    fndTask.important = false
                    cop.mainTasksGroup[1].tasksItems.filter((el: any) => el.id !== fndTask.id)
                    cop.mainTasksGroup[1].tasksItems = cop.mainTasksGroup[1].tasksItems.filter((el: any) => el.id !== fndTask.id)

                } else {
                    fndTask.important = true
                    cop.mainTasksGroup[1].tasksItems.push(fndTask)
                }
            } else {
                let fndTask = findTaskGrp.completedTasks.find((el: any) => el.id === action.payload.taskId)
                fndTask.important = !fndTask.important
            }

            localStorage.setItem('user', JSON.stringify({ ...state }))
            return {
                ...state,
                user: { ...cop }
            }
        case ProfileStateEnum.GET_INFO_CURRENT_TASK:
            // @ts-ignore
            const getTasksGroup = state.user[defineTasksGroup(action)].find((el: any) => el.groupName === action.payload.groupName)

            // @ts-ignore

            let getInfoAboutTask = getTasksGroup.tasksItems.find((el: any) => el.id === action.payload.taskId)


            if (!getInfoAboutTask) {
                getInfoAboutTask = getTasksGroup.completedTasks.find((el: any) => el.id === action.payload.taskId)
            }

            return {
                ...state,
                user: {
                    ...state.user,
                    currentTask: { ...getInfoAboutTask }
                }
            }
        case ProfileStateEnum.CHANGE_INFO_TASK:


            const copyState = { ...state.user }

            // @ts-ignore
            const getTasksGrp = copyState[defineTasksGroup(action)]

            const getGrpName = getTasksGrp.find((el: any) => el.groupName === action.payload.groupName)


            let changeTitleTask = getGrpName.tasksItems.find((el: any) => el.id === action.payload.taskId)

            if (!changeTitleTask) {
                changeTitleTask = getGrpName.completedTasks.find((el: any) => el.id === action.payload.taskId)
            }


            changeTitleTask.title = action.payload.title


            localStorage.setItem('user', JSON.stringify({ ...state }))

            return {
                ...state,
                user: { ...copyState }
            }
        case ProfileStateEnum.TASK_IS_DONE:

            const copyStr = { ...state.user }

            // @ts-ignore
            const getTskGroup = copyStr[defineTasksGroup(action)]


            const getGpName = getTskGroup.find((el: any) => el.groupName === action.payload.groupName)

            const findNeedTask = getGpName.tasksItems.find((el: any) => el.id === action.payload.taskId)


            if (findNeedTask) {
                getGpName.tasksItems = getGpName.tasksItems.filter((el: any) => el.id !== action.payload.taskId)
                getGpName.completedTasks.unshift(findNeedTask)
            } else {
                const findNeedTask = getGpName.completedTasks.find((el: any) => el.id === action.payload.taskId)
                getGpName.completedTasks = getGpName.completedTasks.filter((el: any) => el.id !== findNeedTask.id)
                getGpName.tasksItems.unshift(findNeedTask)
            }


            localStorage.setItem('user', JSON.stringify({ ...state }))


            return {
                ...state,
                user: { ...copyStr }
            }
        case ProfileStateEnum.CREATE_NEW_GROUP_TASK:


            const copyStat = { ...state }

            copyStat.user.createdTasksGroup = [...state.user.createdTasksGroup, { ...action.payload }]

            localStorage.setItem('user', JSON.stringify({ ...copyStat }))

            return {
                ...state,
                user: { ...copyStat.user }
            }
        case ProfileStateEnum.DELETE_TASK_GROUP:

            const copp = { ...state }

            copp.user.createdTasksGroup = copp.user.createdTasksGroup.filter((el: any) => el.id !== action.payload)

            localStorage.setItem('user', JSON.stringify({ ...copp }))

            return {
                ...state,
                user: { ...copp.user }
            }
        case ProfileStateEnum.MOVE_TASK_GROUP:

            const copy = { ...state.user }

            const findGroup = copy.createdTasksGroup.find((el: any) => el.id === action.payload.groupId)

            const findTask = findGroup.tasksItems.filter((el: any) => el.id === action.payload.taskId)

            const findMoveGroup = copy.createdTasksGroup.find((el: any) => el.id === action.payload.moveGroupId)

            const findCurrentGroupIndex = copy.createdTasksGroup.findIndex((el: any) => el.id === action.payload.groupId)

            const removeTask = copy.createdTasksGroup[findCurrentGroupIndex].tasksItems.filter((el: any) => el.id !== action.payload.taskId)
            copy.createdTasksGroup[findCurrentGroupIndex].tasksItems = [...removeTask]

            findMoveGroup.tasksItems.push(findTask[0])

            localStorage.setItem('user', JSON.stringify({ ...state }))

            return {
                ...state,
                user: { ...copy }
            }
        default:
            return state

    }
}


export default profileReducer