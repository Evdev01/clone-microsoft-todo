import React, { FC } from 'react'
import Header from "../Header"
import MainContent from "../MainContent"

interface TMainProps {}

const Main:FC = () => {
    return (
        <div>
            <Header/>
            <
                MainContent/>
        </div>
    )
}

export type { TMainProps };
export default Main