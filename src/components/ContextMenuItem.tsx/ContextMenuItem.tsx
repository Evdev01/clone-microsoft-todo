import React, { FC } from 'react'
import './ContextMenuItem.scss'
import ChevronRight from "../svg/ChevronRight"

interface IContextMenuItemProps {
    option: {
        icon: any
        title: string
        innerItem?: {
            icon: any
            title: string
        }
    }
    classes: any
    setIsShowInnerMenu: (bol: boolean) => boolean
}

const ContextMenuItem: FC<IContextMenuItemProps> = ({ option: {innerItem, icon, title}, classes, setIsShowInnerMenu  }) => {


    const checkInnerItem = () => {
        if (!!innerItem) {
            setIsShowInnerMenu(true)
        }
    }


    return (
        <div className='custom__context-item-wrapper' onMouseEnter={ checkInnerItem }
             >
            <div className={ title ? "custom__context-item" : "custom__context-item-hr" }>
                <div className="context-item-wrapper">
                { icon }
                { title
                    ? <li key={ title } className={ `istItem ${ classes?.listItem }` }>
                        { title }
                    </li>
                    : null
                }
                </div>

                {!!innerItem
                    ? <div className='context-item-chevron'><ChevronRight/></div>
                    : null
                }

            </div>
        </div>
    )
}

export default ContextMenuItem