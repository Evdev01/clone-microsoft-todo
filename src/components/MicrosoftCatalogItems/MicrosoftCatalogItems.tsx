import React, { FC } from 'react'
import './MicrosoftCatalogItems.scss'
import MicrosoftItem from "../MicrosoftItem/MicrosoftItem"
import OutLookIcon from "../svg/MicrosoftCatalog/OutLookIcon/OutLookIcon"
import OneDriveIcon from "../svg/MicrosoftCatalog/OneDriveIcon/OneDriveIcon"
import Teams from "../svg/MicrosoftCatalog/Teams/Teams"
import WordIcon from "../svg/MicrosoftCatalog/WordIcon/WordIcon"
import ExelIcon from "../svg/MicrosoftCatalog/ExelIcon/ExelIcon"
import PowerPointIcon from "../svg/MicrosoftCatalog/PowerPointIcon/PowerPointIcon"
import OneNoteIcon from "../svg/MicrosoftCatalog/OneNoteIcon/OneNoteIcon"
import ToDoIcon from "../svg/MicrosoftCatalog/ToDoIcon/ToDoIcon"
import FamilySafetyIcon from "../svg/MicrosoftCatalog/FamilySafetyIcon/FamilySafetyIcon"
import MicrosoftCalendarIcon from "../svg/MicrosoftCatalog/MicrosoftCalendarIcon/MicrosoftCalendarIcon"
import SkypeIcon from "../svg/MicrosoftCatalog/SkypeIcon/SkypeIcon"

const MicrosoftCatalogItems:FC = () => {
    return <div className="microsoft__catalog-wrapper-items">
        <MicrosoftItem icon={<OutLookIcon/>} text={'Outlook'}/>
        <MicrosoftItem icon={<OneDriveIcon/>} text={'OneDrive'}/>
        <MicrosoftItem icon={<Teams/>} text={'Teams'}/>
        <MicrosoftItem icon={<WordIcon/>} text={'Word'}/>
        <MicrosoftItem icon={<ExelIcon/>} text={'Exel'}/>
        <MicrosoftItem icon={<PowerPointIcon/>} text={'PowerPoint'}/>
        <MicrosoftItem icon={<OneNoteIcon/>} text={'OneNote'}/>
        <MicrosoftItem icon={<ToDoIcon/>} text={'To do'}/>
        <MicrosoftItem icon={<FamilySafetyIcon/>} text={'FamilySafetyIcon'}/>
        <MicrosoftItem icon={<MicrosoftCalendarIcon/>} text={'Calendar'}/>
        <MicrosoftItem icon={<SkypeIcon/>} text={'Skype'}/>
    </div>
}

export default MicrosoftCatalogItems