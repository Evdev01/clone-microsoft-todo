import React, { FC } from 'react'
import Header from "../Header"
import MainContent from "../MainContent"
import AuthPage from "../../pages/AuthPage"
import { useTypedSelector } from "../../hooks/useTypedSelector"
import { Redirect, Route, Switch } from "react-router-dom"

interface TMainProps {
}

const Main: FC = () => {

    const {isAuth}: any = useTypedSelector(state => state.auth)


    return (
        <div>
            <Switch>
                <Route exact path={ '/' }
                       component={ () => <div>
                           <Header/>
                           <MainContent/>
                       </div> }/>

                <Route path={ '/tasks/:group?' }
                       component={ () => <div>
                           <Header/>
                           <MainContent/>  </div>}/>

                <Route path={ '/login' }
                       component={ () => <AuthPage/> }/>
                <Redirect to="/"/>
            </Switch>
        </div>
    )
}

export type { TMainProps }
export default Main