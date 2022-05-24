import React, { FC } from 'react'
import './NewsPanelMenu.scss'
import CloseIcon from "../svg/CloseIcon"
import NewsSamsungIcon from "../svg/NewsSamsungIcon"
import CellPhoneIcon from "../svg/CellPhoneIcon"
import NewCategoriesIcon from "../svg/NewCategoriesIcon"
import CategoryPanelMenuIcon from "../svg/CategoryPanelMenuIcon"
import { classification, samsungContact, apple, microsoft, android } from './NewsPanelMenuLinks'
import NewsPanelMenuItem from "../NewsPanelMenuItem/NewsPanelMenulItem"
import { useDispatch } from "react-redux"
import { openSideBarMenu } from "../../store/reducers/side-bar/action-creators"
import AppleIcon from "../svg/AppleIcon"
import MicrosoftIcon from "../svg/MicrosoftIcon"
import AndroidIcon from "../svg/AndroidIcon"

const NewsPanelMenu: FC = () => {

    const dispatch = useDispatch()

    const showUserSetting = () => {
        dispatch(openSideBarMenu(''))
    }

    return (
        <div className="news__panel">
            <div className="news__panel-wrapper">
                <div className="news__panel-header">
                    <h3>Новые возможности</h3>
                    <div className="news__panel-close-icon" onClick={ showUserSetting }>
                        <CloseIcon/>
                    </div>
                </div>

                <NewsPanelMenuItem mainIcon={ <NewsSamsungIcon/> } icon={ <CellPhoneIcon/> } link={ samsungContact }>
                    <div className="news__panel-item-info-title"><span>Управление</span> Samsung
                        Reminder <span>в</span> To Do
                    </div>
                    <p><span>Синхронизируйте</span> Samsung Reminder с To Do, <span>чтобы управлять своими
                                напоминаниями о пропущенных звонках, сообщениях</span>, Bixby <span>и т. д</span>.</p>
                </NewsPanelMenuItem>

                <NewsPanelMenuItem mainIcon={ <NewCategoriesIcon/> } icon={ <CategoryPanelMenuIcon/> }
                                   link={ classification }>
                    <div className="news__panel-item-info-title"><span>Управление</span> Samsung
                        Reminder <span>в</span> To Do
                    </div>
                    <p><span>Назначайте категории для упорядочения задач. Перейдите к представлению сведений о задаче, чтобы опробовать эту возможность.</span>
                    </p>
                </NewsPanelMenuItem>
            </div>
            <div className="news__panel-footer">
                <div className="news__panel-footer-wrapper">
                    <p>Скачайте приложение.</p>
                    <div className="news__panel-footer-icons">
                        <a href={apple} target="_blank">
                            <AppleIcon/>
                        </a>
                        <a href={microsoft} target="_blank">
                            <MicrosoftIcon/>
                        </a>
                        <a href={android} target="_blank">
                            <AndroidIcon/>

                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsPanelMenu