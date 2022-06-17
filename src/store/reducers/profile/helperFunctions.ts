export const copyState = (initialState?: any) => {
    return { ...initialState }
}


export const copyStateUser = (initialState?: any) => {
    return { ...initialState.user }
}

export const findInMainTaskGroup = (state: any, action: any) => {
    return copyStateUser(state).mainTasksGroup.find((el: any) => el.groupName === action.payload.groupName)
}

export const findInCreatedTaskGroup = (state: any, action: any) => {
    return copyStateUser(state).createdTasksGroup.find((el: any) => el.groupName === action.payload.groupName)
}

export const getNeedGroupName = (state: any, action: any) => {
    return findInMainTaskGroup(state, action) || findInCreatedTaskGroup(state, action)
}

export const findCompletedItemsById = (state: any, action: any) => {
    return getNeedGroupName(state, action).completedTasks.find((el: any) => el.id === action.payload.taskId)
}


export const filterTaskItemsById = (state: any, action: any) => {
    return getNeedGroupName(state, action).tasksItems.filter((el: any) => el.id !== action.payload.taskId)
}

export const filterCompletedItemsById = (state: any, action: any) => {
    return getNeedGroupName(state, action).completedTasks.filter((el: any) => el.id !== action.payload.taskId)
}

export const findTaskItemsById = (state: any, action: any) => {
    return getNeedGroupName(state, action).tasksItems.find((el: any) => el.id === action.payload.taskId)
}



export const defineTasksGroup = (action: any) => {

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

export const findTaskGroup = (state: any, action: any) => {
    // @ts-ignore
    return copyStateUser(state)[defineTasksGroup(action)].find((el: any) => el.groupName === action.payload.groupName)
}
