import React, { FC, useState } from 'react'
import Header from "../Header"
import MainContent from "../MainContent"
import AuthPage from "../../pages/AuthPage/AuthPage"

interface TMainProps {
}

const Main: FC = () => {

    const [isAuth, setIsAuth] = useState<boolean>(false)

    return (
        <div>
            {isAuth
                ? <div>
                    <Header/>
                    <MainContent/>
                </div>
                : <AuthPage setIsAuth={setIsAuth}/>
            }
        </div>
    )
}

export type { TMainProps }
export default Main