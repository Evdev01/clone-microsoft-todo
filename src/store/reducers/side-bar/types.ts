import { MutableRefObject } from "react"

export type SideBarItem = {
    isShowSidebarMenu: string
    title?: string
    isShowProfileMenu: boolean
}

export enum SideBarItemEnum {
    GET_SIDE_BAR_ITEM_TITLE = "GET_SIDE_BAR_ITEM_TITLE",
    IS_SHOW_PROFILE_MENU = "IS_SHOW_PROFILE_MENU",
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

export interface IsShowProfileMenu {
    type: SideBarItemEnum.IS_SHOW_PROFILE_MENU
    payload: MutableRefObject<any>
}

export type SideBarItemAction = GetItemTitle | OpenUserSetting | IsShowProfileMenu