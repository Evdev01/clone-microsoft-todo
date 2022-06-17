export interface Task {
    id: number
    title: string
    category?: string
    my_day?: boolean
    date_created?: string
    date_closed?: string
    comment?: string
    finished?: boolean
    important?: boolean
}