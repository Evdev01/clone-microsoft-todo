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
            <div className='side__bar-footer-item'><EmailIcon/></div>
            <div className='side__bar-footer-item'><CalendarIcon/></div>
            <div className='side__bar-footer-item'><PeopleIcon/></div>
            <div className='side__bar-footer-item'><AttachIcon/></div>
            <div className='side__bar-footer-item'><DoneIcon/></div>
        </div>
    )
}

export default SideBarFooter