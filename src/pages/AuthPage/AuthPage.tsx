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

interface TAuthPageProps {
}

const AuthPage: FC<TAuthPageProps> = ({}) => {


    const [entryAllowed, setEntryAllowed] = useState<boolean>(false)
    const [typePopUpAuth, setTypePopUpAuth] = useState<string>('signIn')

    const [popUpInputValue, setPopUpInputValue] = useState<string>('')

    const dispatch = useDispatch()

    const { isEmailExists, isError, isNewUser }: any = useTypedSelector(state => state.auth)

    useEffect(() => {
        popUpAction()
    }, [isEmailExists, isNewUser])



    const popUpAction = () => {
        if (popUpInputValue.length) {
            if (typePopUpAuth === 'signIn') {
                dispatch(checkEmail(popUpInputValue))

                if (isEmailExists) {
                    setTypePopUpAuth('checkPassword')
                    setPopUpInputValue('')
                }
            } else if (typePopUpAuth === 'checkPassword') {

                if (isEmailExists) {
                    dispatch(checkPassword(popUpInputValue))
                } else if (isNewUser) {
                    dispatch(createNewUserAction(popUpInputValue))
                }

            } else if (typePopUpAuth === 'createAccount') {

                dispatch(checkEmailInDb(popUpInputValue))

                if (isNewUser) {
                    setTypePopUpAuth('checkPassword')
                    setPopUpInputValue('')
                }

            } else {
                console.error('error')
            }
        }
    }


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