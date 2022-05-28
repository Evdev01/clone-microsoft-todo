import React, { FC } from 'react'
import './ContextMenuInnerItem.scss'
import BulletedIcon from "../svg/BulletedIcon"

interface TContextMenuItemProps {
    title: string
    classes: any
}

const ContextMenuInnerItem:FC<TContextMenuItemProps> = ({title, classes}) => {
    return (
            <div className='contextMenu__inner-item'>
                <div className="context-item-wrapper">
                    <BulletedIcon/>
                    { title
                        ? <li key={ title } className={ `istItem ${ classes?.listItem }` }>
                            { title }
                        </li>
                        : null
                    }
                </div>
            </div>
    )
}

export default ContextMenuInnerItem