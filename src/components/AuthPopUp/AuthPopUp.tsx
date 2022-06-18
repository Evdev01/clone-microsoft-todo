import React, { Dispatch, FC, SetStateAction } from 'react'
import './AuthPopUp.scss'
import MicrosoftIcon from "../svg/MicrosoftIcon"
import IntelligenceMenuItem from "../IntelligenceMenuItem/IntelligenceMenuItem"
import InfoForDifferentPopUp from './infoForDifferentPopUp'

interface TAuthPopUpProps {
    signInError: boolean
    entryAllowed: boolean
    typePopUpAuth: string
    popUpInputValue: string
    setPopUpInputValue: Dispatch<SetStateAction<string>>
    popUpAction: any
    createNewUser: any
}

const AuthPopUp: FC<TAuthPopUpProps> = ({ signInError, entryAllowed, typePopUpAuth, popUpInputValue, setPopUpInputValue, popUpAction, createNewUser }) => {


    // @ts-ignore
    const {headerTitle, title, subTitle, popUpName, errorMessage, placeholder} = InfoForDifferentPopUp.find((el: any) => el.popUpName === typePopUpAuth)


    return (
        <div className="auth__pop_up">
            <div className="auth__pop_up-wrapper">
                <MicrosoftIcon/>
                <h6>{ headerTitle }</h6>
                { signInError
                    ? <div
                        className="auth__pop_up-error">{ signInError ? errorMessage : null }</div>
                    : null
                }
                <input value={popUpInputValue} onChange={ e => setPopUpInputValue(e.target.value)} type="text" placeholder={placeholder}/>
                <div className="auth__pop_up-links">
                    {popUpName === 'signIn' ? <p>Нет учетной записи?</p> : null }
                    <a target="_blank" onClick={popUpName === 'signIn' ? createNewUser : null}>
                        {title}
                    </a>
                </div>
                <IntelligenceMenuItem title={ subTitle } link={ '' }/>
                { entryAllowed
                    ? <div className="auth__pop_up-buttons">
                        <button className="primary__blue">Вход</button>
                    </div>
                    : <div className="auth__pop_up-buttons">
                        {popUpName === 'signIn' ? <button>Назад</button> : null}
                        <button className="primary__blue" onClick={popUpAction}>{popUpName === 'checkPassword' ? 'Вход' : 'Далее'}</button>
                    </div>
                }

            </div>
        </div>
    )
}

export default AuthPopUp