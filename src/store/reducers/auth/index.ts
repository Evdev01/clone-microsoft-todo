import { AuthState, AuthStateAction, AuthStateEnum } from "./types"


const initialState: AuthState = {
    isAuth: false,
    isEmailExists: false,
    isError: false,
    isNewUser: false,
    isNewUserEmail: '',
    currentEmail: '',
    imitationDb: [
        {
            email: '1',
            password: '2'
        }
    ]
}

const authReducer = (state = initialState, action: AuthStateAction) => {
    switch (action.type) {
        case AuthStateEnum.CREATE_NEW_USER:

            const newUser = {
                email: state.isNewUserEmail,
                password: action.payload
            }

            console.log('newUser', newUser)


            // @ts-ignore
            return {
                ...state,
                imitationDb: [...state.imitationDb, {...newUser}],
                isAuth: true
            }
        case AuthStateEnum.CHECK_EMAIL_IN_DB:

            // @ts-ignore
            const checkEmailInDb = state.imitationDb.find((el: any) => el.email === action.payload)


            if (checkEmailInDb) {
                return {...state, isError: true}
            } else {
                // @ts-ignore
                return {...state, isNewUser: true, isNewUserEmail: action.payload, isError: false}
            }

        case AuthStateEnum.CHECK_USER_EMAIL:

            const checkUserInDb = state.imitationDb.find((el: any) => el.email === action.payload)


            if (checkUserInDb) {
                return { ...state, isEmailExists: true, isError: false, currentEmail: checkUserInDb.email}
            } else {
                return { ...state, isError: true}
            }
        case AuthStateEnum.CHECK_USER_PASSWORD:

            const checkUserPassword = state.imitationDb.find((el: any) => el.password === action.payload)

            if (checkUserPassword && state.isEmailExists) {
                return {...state, isAuth: true}
            } else {
                return {...state, isError: true}
            }
        case AuthStateEnum.LOG_OUT_PROFILE:

            return {...state, isAuth: false, isError: false}

        default:
            return state
    }
}


export default authReducer