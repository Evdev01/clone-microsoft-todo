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
        }
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
                    {
                        id: 4,
                        title: 'mydayTitle'
                    },
                    {
                        id: 14,
                        title: 'mydayTitle14'
                    },
                ]
            },
            {
                id: 2,
                groupName: 'important',
                route: 'important',
                tasksItems: [{
                    id: 5,
                    title: 'importantTitle'
                }]
            },
            {
                id: 3,
                groupName: 'planned',
                route: 'planned',
                tasksItems: [{
                    id: 6,
                    title: 'plannedTitle'
                }]
            },
            {
                id: 4,
                groupName: 'assigned_to_me',
                route: 'assigned_to_me',
                tasksItems: [{
                    id: 7,
                    title: 'assignedTitle'
                }]
            }, {
                id: 5,
                groupName: 'inbox',
                route: 'inbox',
                tasksItems: [{
                    id: 7,
                    title: 'inboxTitle'
                }]
            },

        ],
        createdTasksGroup: [
            {
                id: 6,
                groupName: 'test',
                route: 'test',
                tasksItems: [{
                    id: 10,
                    title: 'testTitle'
                },
                    {
                        id: 16,
                        title: 'testTitle223'
                    }
                ]
            },
            {
                id: 7,
                groupName: 'test2',
                route: 'test2',
                tasksItems: [{
                    id: 11,
                    title: 'testTitle2'
                }]
            }
        ],
    }
}

const profileReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ProfileStateEnum.GET_PROFILE_INFO:
            return { ...state }
        case ProfileStateEnum.REMOVE_TASK_BY_ID:


            const copyUser = { ...state.user }

            const findInMainTasksGroup = copyUser.mainTasksGroup.find((el: any) => el.groupName === action.payload.groupName)

            const findInCreatedTasksGroup = copyUser.createdTasksGroup.find((el: any) => el.groupName === action.payload.groupName)

            const getNeedGroupName = findInMainTasksGroup || findInCreatedTasksGroup

            const deleteTaskById = getNeedGroupName.tasksItems.filter((el: any) => el.id !== action.payload.taskId)

            // @ts-ignore
            const findIndexGroupTask = copyUser[defineTasksGroup(action)].findIndex((el: any) => el.groupName === action.payload.groupName)

            // @ts-ignore
            copyUser[defineTasksGroup(action)][findIndexGroupTask].tasksItems = [...deleteTaskById]

            return {
                ...state,
                user: { ...copyUser }
            }
        case ProfileStateEnum.CREATE_NEW_TASK:

            // @ts-ignore
            const copyStore = { ...state.user }

            // @ts-ignore
            const findTaskGroup = copyStore[defineTasksGroup(action)].find((el: any) => el.groupName === action.payload.groupName)

            findTaskGroup.tasksItems.push({ id: action.payload.id, title: action.payload.title })

            return {
                ...state,
                user: { ...copyStore }
            }
        case ProfileStateEnum.GET_INFO_CURRENT_TASK:
            // @ts-ignore
            const getTasksGroup = state.user[defineTasksGroup(action)].find((el: any) => el.groupName === action.payload.groupName)

            const getInfoAboutTask = getTasksGroup.tasksItems.find((el: any) => el.id === action.payload.taskId)

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

            const changeTitleTask = getGrpName.tasksItems.find((el: any) => el.id === action.payload.taskId)


            changeTitleTask.title = action.payload.title


            return {
                ...state,
                user: { ...copyState }
            }
        case ProfileStateEnum.CREATE_NEW_GROUP_TASK:
            return {
                ...state,
                user: {
                    ...state.user,
                    createdTasksGroup: [...state.user.createdTasksGroup, { ...action.payload }]
                }
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

            return {
                ...state,
                user: { ...copy }
            }
        default:
            return state

    }
}


export default profileReducer