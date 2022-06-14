import React, { FC, useState } from 'react'
import Header from "../Header"
import MainContent from "../MainContent"
import AuthPage from "../../pages/AuthPage/AuthPage"
import { useTypedSelector } from "../../hooks/useTypedSelector"

interface TMainProps {
}

const Main: FC = () => {

    // const [isAuth, setIsAuth] = useState<boolean>(false)
    const {isAuth}: any = useTypedSelector(state => state.auth)


    return (
        <div>
            {isAuth
                ? <div>
                    <Header/>
                    <MainContent/>
                </div>
                : <AuthPage/>
            }
        </div>
    )
}

export type { TMainProps }
export default Main