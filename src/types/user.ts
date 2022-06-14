import { Task } from "./task"

export interface User {
    id: number
    name: string
    sure_name: string
    my_day_tasks: Task
}
