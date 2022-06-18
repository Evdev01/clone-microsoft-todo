import React, { FC, useCallback, useEffect, useState } from 'react'
import './AuthPage.scss'
import AuthPopUp from "../../components/AuthPopUp"
import { useTypedSelector } from "../../hooks/useTypedSelector"
import { useDispatch } from "react-redux"
import {
    checkEmail,
    checkEmailInDb,
    checkPassword,
    createNewUserAction,
} from "../../store/reducers/auth/action-creators"
import { useHistory } from "react-router-dom"

interface TAuthPageProps {
}

const AuthPage: FC<TAuthPageProps> = ({}) => {

    const [entryAllowed, setEntryAllowed] = useState<boolean>(false)
    const [typePopUpAuth, setTypePopUpAuth] = useState<string>('signIn')

    const [popUpInputValue, setPopUpInputValue] = useState<string>('')

    const dispatch = useDispatch()
    const history = useHistory()


    const { isEmailExists, isError, isNewUser, currentEmail, isAuth }: any = useTypedSelector(state => state.auth)


    useEffect( () => {
        if (isEmailExists) {
            setTypePopUpAuth('checkPassword')
        }

        if (isAuth) {
            history.push('tasks/myday')
        }

        if (isNewUser) {
            setTypePopUpAuth('checkPassword')
        }



    }, [isEmailExists, isAuth])


    const popUpAction = useCallback(() => {
        if (typePopUpAuth === 'signIn') {
            dispatch(checkEmail(popUpInputValue))
        } else if (typePopUpAuth === 'checkPassword') {

            if (isEmailExists) {
                dispatch(checkPassword(popUpInputValue))
                setTypePopUpAuth('checkPassword')
            } else if (isNewUser) {
                dispatch(createNewUserAction(popUpInputValue))
                history.push('tasks/myday')
            }

        } else if (typePopUpAuth === 'createAccount') {
            dispatch(checkEmailInDb(popUpInputValue))
        } else {
            console.error('error')
        }
    }, [popUpInputValue, isEmailExists, isNewUser])


    const createNewUser = useCallback(() => {
        setTypePopUpAuth('createAccount')
    }, [typePopUpAuth])

    return (
        <div className="auth__page">
            <AuthPopUp signInError={ isError } entryAllowed={ entryAllowed } typePopUpAuth={ typePopUpAuth }
                       popUpInputValue={ popUpInputValue } setPopUpInputValue={ setPopUpInputValue }
                       popUpAction={ popUpAction } createNewUser={ createNewUser }/>
            <div className="auth__page-footer">
                <p>Условия использования</p>
                <p>Конфиденциальность и файлы cookie</p>
                <p>...</p>
            </div>
        </div>
    )
}

export default AuthPage