import { AuthState, AuthStateAction, AuthStateEnum } from "./types"


const initialState: AuthState = {
    isAuth: false,
    isEmailExists: false,
    isError: false,
    isNewUser: false,
    isNewUserEmail: '',
    currentEmail: '',
    imitationDb: [{
        email: '1',
        password: '2'
    }]
}

const getImitationDbFromLocalStorage = () => {
    // @ts-ignore
    if (initialState.imitationDb.length > 2) {
        initialState.imitationDb = JSON.parse(<string>localStorage.getItem('imitationDb'))
    }
    initialState.isAuth = JSON.parse(<string>localStorage.getItem('isAuth'))

}

getImitationDbFromLocalStorage()

const authReducer = (state = initialState, action: AuthStateAction) => {
    switch (action.type) {
        case AuthStateEnum.CREATE_NEW_USER:

            const newUser = {
                email: state.isNewUserEmail,
                password: action.payload
            }

            const saveInLocalStorage = [...state.imitationDb, {...newUser}]

            localStorage.setItem('imitationDb', JSON.stringify(saveInLocalStorage))

            // @ts-ignore
            return {
                ...state,
                imitationDb: [...state.imitationDb, {...newUser}],
            }

        case AuthStateEnum.CHECK_EMAIL_IN_DB:

            // @ts-ignore

            let checkEmailInDb = {}

            if (state.imitationDb.length) {
                checkEmailInDb = state.imitationDb.find((el: any) => el.email === action.payload)
            }


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
                return { ...state, isError: true, isEmailExists: false}
            }

        case AuthStateEnum.CHECK_USER_PASSWORD:

            const checkUserPassword = state.imitationDb.find((el: any) => el.password === action.payload)



            if (checkUserPassword && state.isEmailExists) {
                localStorage.setItem('isAuth', 'true')
                return {...state, isAuth: true}
            } else {
                return {...state, isError: true}
            }
        case AuthStateEnum.LOG_OUT_PROFILE:

            localStorage.setItem('isAuth', 'false')

            return {...state, isAuth: false, isError: false}

        default:
            return state
    }
}


export default authReducer