export type SideBarItem = {
    title?: string
}

export enum SideBarItemEnum {
    GET_SIDE_BAR_ITEM_TITLE = "GET_SIDE_BAR_ITEM_TITLE"
}

export interface GetItemTitle {
    type: SideBarItemEnum.GET_SIDE_BAR_ITEM_TITLE
    payload: string
}

export type SideBarItemAction = GetItemTitle