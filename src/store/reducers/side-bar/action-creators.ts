import { Dispatch } from "redux"
import { SideBarItemAction, SideBarItemEnum } from "./types"
import { MutableRefObject } from "react"


export const getSideBarItemName = (title: string) => async (dispatch: Dispatch<SideBarItemAction>) => {
    dispatch({ type: SideBarItemEnum.GET_SIDE_BAR_ITEM_TITLE, payload: title })
}

export const openSideBarMenu = (isShowSidebarMenu: string) => async (dispatch: Dispatch<SideBarItemAction>) => {
    dispatch({ type: SideBarItemEnum.OPEN_SIDEBAR_ITEM, payload: isShowSidebarMenu })
}

export const refProfileMenuAction = (ref: MutableRefObject<any>) => async (dispatch: Dispatch<SideBarItemAction>) => {
    dispatch({ type: SideBarItemEnum.IS_SHOW_PROFILE_MENU, payload: ref })
}

export const getSideBarItemInfo = (sideBarItem: {}) => async (dispatch: Dispatch<SideBarItemAction>) => {
    dispatch({ type: SideBarItemEnum.GET_SIDE_BAR_ITEM_INF0, payload: sideBarItem })
}