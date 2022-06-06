import { SideBarItem, SideBarItemAction, SideBarItemEnum } from "./types"

const initialState: SideBarItem = {
    title: '',
    isShowSidebarMenu: '',
    isShowProfileMenu: false
}

export default function authReducer(state = initialState, action: SideBarItemAction) {
    switch (action.type) {
        case SideBarItemEnum.GET_SIDE_BAR_ITEM_TITLE:
            return { ...state, title: action.payload }
        case SideBarItemEnum.OPEN_SIDEBAR_ITEM:
            return { ...state, isShowSidebarMenu: action.payload }
        case SideBarItemEnum.IS_SHOW_PROFILE_MENU:
            return { ...state, isShowProfileMenu: action.payload }
        default:
            return state
    }
}
