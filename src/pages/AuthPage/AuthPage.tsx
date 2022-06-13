import React, { Dispatch, FC, SetStateAction, useEffect, useState } from 'react'
import './AuthPage.scss'
import AuthPopUp from "../../components/AuthPopUp/AuthPopUp"

interface TAuthPageProps {
    setIsAuth: Dispatch<SetStateAction<boolean>>
}

const AuthPage: FC<TAuthPageProps> = ({setIsAuth}) => {

    const [signInError, setSignInError] = useState<boolean>(false)
    const [entryAllowed, setEntryAllowed] = useState<boolean>(false)
    const [typePopUpAuth, setTypePopUpAuth] = useState<string>('signIn')

    const [popUpInputValue, setPopUpInputValue] = useState<string>('')

    const user = {
        email: '1',
        password: '2'
    }

    const popUpAction = () => {
        if (popUpInputValue.length) {
            if (typePopUpAuth === 'signIn' && popUpInputValue === user.email) {
                setTypePopUpAuth('checkPassword')
                setSignInError(false)
                setPopUpInputValue('')
            } else if (typePopUpAuth === 'checkPassword' && popUpInputValue === user.password) {
                setIsAuth(true)
            } else if (typePopUpAuth === 'createAccount' && user.email !== popUpInputValue) {
                const copyUser = {...user}
                copyUser.email = popUpInputValue
                setTypePopUpAuth('checkPassword')
                setSignInError(false)
                setPopUpInputValue('')
            } else {
                setSignInError(true)
            }
        }
    }

    const createNewUser = () => {
        setTypePopUpAuth('createAccount')
    }

    return (
        <div className="auth__page">
            <AuthPopUp signInError={ signInError } entryAllowed={ entryAllowed } typePopUpAuth={ typePopUpAuth }
                       popUpInputValue={ popUpInputValue } setPopUpInputValue={ setPopUpInputValue } popUpAction={popUpAction} createNewUser={createNewUser}/>
            <div className="auth__page-footer">
                <p>Условия использования</p>
                <p>Конфиденциальность и файлы cookie</p>
                <p>...</p>
            </div>
        </div>
    )
}

export default AuthPage