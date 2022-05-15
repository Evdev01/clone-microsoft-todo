import { SideBarItem, SideBarItemAction, SideBarItemEnum } from "./types"

const initialState: SideBarItem = {
    title: ''
}

export default function authReducer(state = initialState, action: SideBarItemAction) {
    switch (action.type) {
        case SideBarItemEnum.GET_SIDE_BAR_ITEM_TITLE:
            return { ...state, title: action.payload }
        default:
            return state
    }
}
