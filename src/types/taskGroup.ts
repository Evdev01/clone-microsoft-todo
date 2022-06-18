import { Task } from "./task"

export interface TaskGroup {
    id: number
    groupName: string,
    route: string,
    tasksItems: Task[],
    completedTasks: Task[],
}

