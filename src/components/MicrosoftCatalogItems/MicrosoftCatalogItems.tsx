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
import {
    outLook,
    oneDrive,
    teams,
    word,
    exel,
    powerPoint,
    oneNote,
    toDo,
    familySafety,
    calendar,
    skype
} from './MicrosoftCatalogLinks'

const MicrosoftCatalogItems: FC = () => {
    return <div className="microsoft__catalog-wrapper-items">
        <MicrosoftItem icon={ <OutLookIcon/> } text={ 'Outlook' } link={ outLook }/>
        <MicrosoftItem icon={ <OneDriveIcon/> } text={ 'OneDrive' } link={ oneDrive }/>
        <MicrosoftItem icon={ <Teams/> } text={ 'Teams' } link={ teams }/>
        <MicrosoftItem icon={ <WordIcon/> } text={ 'Word' } link={ word }/>
        <MicrosoftItem icon={ <ExelIcon/> } text={ 'Exel' } link={ exel }/>
        <MicrosoftItem icon={ <PowerPointIcon/> } text={ 'PowerPoint' } link={ powerPoint }/>
        <MicrosoftItem icon={ <OneNoteIcon/> } text={ 'OneNote' } link={ oneNote }/>
        <MicrosoftItem icon={ <ToDoIcon/> } text={ 'To do' } link={ toDo }/>
        <MicrosoftItem icon={ <FamilySafetyIcon/> } text={ 'FamilySafetyIcon' } link={ familySafety }/>
        <MicrosoftItem icon={ <MicrosoftCalendarIcon/> } text={ 'Calendar' } link={ calendar }/>
        <MicrosoftItem icon={ <SkypeIcon/> } text={ 'Skype' } link={ skype }/>
    </div>
}

export default MicrosoftCatalogItems