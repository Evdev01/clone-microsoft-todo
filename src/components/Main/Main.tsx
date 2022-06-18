import React, { FC } from 'react'
import Header from "../Header"
import MainContent from "../MainContent"
import AuthPage from "../../pages/AuthPage"
import { Redirect, Route, Switch } from "react-router-dom"

interface IMainProps {
}

const Main: FC = () => {


    return (
        <div>
            <Switch>
                <Route path={ '/tasks/:group?' }
                       component={ () => <div>
                           <Header/>
                           <MainContent/>  </div>}/>

                <Route path={ '/login' }
                       component={ () => <AuthPage/> }/>

                <Route exact path={ '/' }
                       component={ () => <Redirect to="/tasks/myday"/> }/>
            </Switch>
        </div>
    )
}

export type { IMainProps }
export default Main