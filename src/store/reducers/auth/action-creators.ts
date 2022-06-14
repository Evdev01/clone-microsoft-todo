import { Dispatch } from "redux"
import { AuthStateAction, AuthStateEnum } from "./types"

export const checkEmailInDb = (user: string) => (dispatch: Dispatch<AuthStateAction>) => {
    dispatch({ type: AuthStateEnum.CHECK_EMAIL_IN_DB, payload: user })
}

export const checkEmail = (email: string) => (dispatch: Dispatch<AuthStateAction>) => {
    dispatch({ type: AuthStateEnum.CHECK_USER_EMAIL, payload: email })
}

export const checkPassword = (password: string) => (dispatch: Dispatch<AuthStateAction>) => {
    dispatch({ type: AuthStateEnum.CHECK_USER_PASSWORD, payload: password })
}

export const createNewUserAction = (password: string) => (dispatch: Dispatch<AuthStateAction>) => {
    dispatch({ type: AuthStateEnum.CREATE_NEW_USER, payload: password })
}

export const logOutProfile = (logOut: boolean) => (dispatch: Dispatch<AuthStateAction>) => {
    dispatch({ type: AuthStateEnum.LOG_OUT_PROFILE, payload: logOut })
}