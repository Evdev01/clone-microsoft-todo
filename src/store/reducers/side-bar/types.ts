export type SideBarItem = {
    isShowSidebarMenu: string
    title?: string
}

export enum SideBarItemEnum {
    GET_SIDE_BAR_ITEM_TITLE = "GET_SIDE_BAR_ITEM_TITLE",
    OPEN_SIDEBAR_ITEM = "OPEN_SIDEBAR_ITEM"
}

export interface GetItemTitle {
    type: SideBarItemEnum.GET_SIDE_BAR_ITEM_TITLE
    payload: string
}

export interface OpenUserSetting {
    type: SideBarItemEnum.OPEN_SIDEBAR_ITEM
    payload: string
}

export type SideBarItemAction = GetItemTitle | OpenUserSetting