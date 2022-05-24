import { Dispatch } from "redux"
import { SideBarItemAction, SideBarItemEnum } from "./types"


export const getSideBarItemName = (title: string) => async (dispatch: Dispatch<SideBarItemAction>) => {
    dispatch({ type: SideBarItemEnum.GET_SIDE_BAR_ITEM_TITLE, payload: title })
}

export const openSideBarMenu = (isShowSidebarMenu: string) => async (dispatch: Dispatch<SideBarItemAction>) => {
    dispatch({ type: SideBarItemEnum.OPEN_SIDEBAR_ITEM, payload: isShowSidebarMenu })
}