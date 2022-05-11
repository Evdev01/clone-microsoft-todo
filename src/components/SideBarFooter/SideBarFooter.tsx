import React, { FC } from 'react'
import './SideBarFooter.scss'
import EmailIcon from '../svg/EmailIcon'
import CalendarIcon from '../svg/CalendarIcon'
import PeopleIcon from '../svg/PeopleIcon'
import AttachIcon from '../svg/AttachIcon'
import DoneIcon from '../svg/DoneIcon'

const SideBarFooter: FC = () => {
    return (
        <div className="side__bar-footer">
            <EmailIcon/>
            <CalendarIcon/>
            <PeopleIcon/>
            <AttachIcon/>
            <DoneIcon/>
        </div>
    )
}

export default SideBarFooter