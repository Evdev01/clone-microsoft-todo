export type TAuthData = {
    email: string
    password: string
}

export type AuthState = {
    isAuth: boolean,
    isEmailExists: boolean,
    isError: boolean,
    isNewUser: boolean,
    isNewUserEmail: string,
    currentEmail: string,
    imitationDb: any
}

export enum AuthStateEnum {
    CHECK_USER_EMAIL = "CHECK_USER_EMAIL",
    CHECK_USER_PASSWORD = "CHECK_USER_PASSWORD",
    CHECK_EMAIL_IN_DB = "CHECK_EMAIL_IN_DB",
    CREATE_NEW_USER = "CREATE_NEW_USER",
    LOG_OUT_PROFILE = "LOG_OUT_PROFILE",
}

export interface CheckUserEmail {
    type: AuthStateEnum.CHECK_USER_EMAIL
    payload?: string
}

export interface CheckUserPassword {
    type: AuthStateEnum.CHECK_USER_PASSWORD
    payload?: string
}

export interface CheckEmailInDb {
    type: AuthStateEnum.CHECK_EMAIL_IN_DB
    payload?: {}
}

export interface CreateNewUser {
    type: AuthStateEnum.CREATE_NEW_USER
    payload?: string
}

export interface LofOutProfile {
    type: AuthStateEnum.LOG_OUT_PROFILE
    payload?: boolean
}

export type AuthStateAction = CheckUserEmail | CheckUserPassword | CheckEmailInDb | CreateNewUser | LofOutProfile
