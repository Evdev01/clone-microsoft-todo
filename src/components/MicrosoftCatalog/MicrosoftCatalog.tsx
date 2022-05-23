import React, { FC } from 'react'
import DotsMenuIcon from "../svg/DotsMenuIcon"
import './MicrosoftCatalog.scss'
import ArrowIcon from "../svg/ArrowIcon"
import MicrosoftCatalogItems from "../MicrosoftCatalogItems/MicrosoftCatalogItems"

interface TMicrosoftCatalogProps {
    toggleShowMicrosoftMenu: () => void
}

const MicrosoftCatalog:FC<TMicrosoftCatalogProps> = ({toggleShowMicrosoftMenu}) => {


    return (
        <div className="microsoft__catalog">
            <div className="microsoft__catalog-wrapper">
                <div className="microsoft__catalog-header">
                    <div className="microsoft__catalog-menu-icon" onClick={toggleShowMicrosoftMenu}>
                        <DotsMenuIcon/>
                    </div>
                    <div className="microsoft__catalog-office">
                        <span>Office</span>
                        <div className="microsoft__catalog-arrow">
                            <ArrowIcon/>
                        </div>
                    </div>
                </div>
                <h2>Microsoft 365</h2>
                <MicrosoftCatalogItems/>
                <div className="microsoft__catalog-office">
                    <span>Все приложения</span>
                    <div className="microsoft__catalog-arrow">
                        <ArrowIcon/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MicrosoftCatalog