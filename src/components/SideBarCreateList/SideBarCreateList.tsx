import React, { FC, FocusEventHandler, useState } from 'react'
import './SideBarCreateList.scss'
import AddIcon from '../svg/AddIcon'
import AddGroupIcon from '../svg/AddGroupIcon'

const SideBarCreateList: FC = () => {

    const [isActiveInput, setIsActiveInput] = useState(false)


    const toggleFocusInput = (event: FocusEventHandler<HTMLInputElement> | any) => setIsActiveInput(!isActiveInput)


    return (
        <div className="side__bar-add-list">
            <div className={!isActiveInput ? 'side__bar-add-list-wrapper' : 'side__bar-add-list-wrapper active'}>
                <AddIcon/>
                { !isActiveInput ? <p onClick={ () => setIsActiveInput(!isActiveInput) }>Создать список</p> :
                   <div className='side__bar-add-menu-wrapper'><input type="text"
                                                                      className='side__bar-input active'
                                                                      ref={input => input && input.focus()}
                                                                      placeholder="Создать список" onBlur={ toggleFocusInput }/></div> }
            </div>
            <div className="side__bar-add-icon">
                <AddGroupIcon/>
            </div>
        </div>
    )
}

export default SideBarCreateList