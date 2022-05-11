import React, { FC, useState } from 'react'
import './SideBarCreateList.scss'
import AddIcon from '../svg/AddIcon'
import AddGroupIcon from '../svg/AddGroupIcon'

const SideBarCreateList: FC = () => {

    const [isAddBarItem, setIsAddBarItem] = useState(false)

    return (
        <div className="side__bar-add-list">
            <div className="side__bar-add-list-wrapper">
                <AddIcon/>
                { !isAddBarItem ? <p onClick={ () => setIsAddBarItem(!isAddBarItem) }>Создать список</p> :
                    <input type="text" placeholder="dsf"/> }
            </div>
            <span>
                <AddGroupIcon/>
            </span>
        </div>
    )
}

export default SideBarCreateList