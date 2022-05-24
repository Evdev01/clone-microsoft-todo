import React, { FC } from 'react'
import './IntelligenceMenu.scss'
import IntelligenceMenuItem from "../IntelligenceMenuItem/IntelligenceMenuItem"
import TwitterIcon from "../svg/TwitterIcon"
import ShareIcon from "../svg/ShareIcon"
import FacebookIcon from "../svg/FacebookIcon"
import { privacy, exportData, servicesAgreement, twitter, facebook, shareWith } from './IntelligenceLinks'


const IntelligenceMenu: FC = () => {

    const todoBadge = require("../../assets/img/todo_badge.png")

    return (
        <div className="intelligence-menu">
            <div className="intelligence__menu-wrapper">
                <h4>Сведения</h4>
                <IntelligenceMenuItem title={ 'Конфиденциальность и файлы cookie' } link={ privacy }/>
                <IntelligenceMenuItem title={ 'Экспорт данных' } link={ exportData }/>
                <IntelligenceMenuItem title={ 'Соглашение об использовании служб Майкрософт' }
                                      boldText={ 'регулирует использование веб-приложения' } link={ servicesAgreement }/>

                <IntelligenceMenuItem title={ 'Уведомления третьих лиц' } boldLink={ true }/>

                <div className="intelligence__menu-rights">
                    <img src={ todoBadge } alt=""/>
                    <p className="intelligence__menu-title">Microsoft To Do</p>
                    <p>©<span> Корпорация Майкрософт</span> (Microsoft Corporation)</p>
                    <p><span>Все права защищены</span></p>
                    <p><span>Версия</span> 2.70.0</p>
                </div>
                <IntelligenceMenuItem title={ 'Копировать ИД сеанса и пользователя' } boldLink={ true }/>
                <h4>Связь</h4>

                <IntelligenceMenuItem title={ 'Подписаться в Twitter' } icon={ <TwitterIcon/> } link={twitter}/>
                <IntelligenceMenuItem title={ 'Поставить отметку «Нравится» в Facebook' } icon={ <FacebookIcon/> } link={facebook}/>
                <IntelligenceMenuItem title={ 'Рассказать всем' } icon={ <ShareIcon/> } link={shareWith}/>

            </div>
        </div>
    )
}

export default IntelligenceMenu