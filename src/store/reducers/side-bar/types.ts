import { MutableRefObject } from "react"

export type SideBarItem = {
    isShowSidebarMenu: string
    title?: string
    isShowProfileMenu: boolean,
    currentSideBarItem: {}
}

export enum SideBarItemEnum {
    GET_SIDE_BAR_ITEM_TITLE = "GET_SIDE_BAR_ITEM_TITLE",
    IS_SHOW_PROFILE_MENU = "IS_SHOW_PROFILE_MENU",
    OPEN_SIDEBAR_ITEM = "OPEN_SIDEBAR_ITEM",
    GET_SIDE_BAR_ITEM_INF0 = "GET_SIDE_BAR_ITEM_INF0"
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

export interface GetSideBarItemInfo {
    type: SideBarItemEnum.GET_SIDE_BAR_ITEM_INF0
    payload: {}
}

export type SideBarItemAction = GetItemTitle | OpenUserSetting | IsShowProfileMenu | GetSideBarItemInfo