import BulletedIcon from "../svg/BulletedIcon"
import PrinterIcon from "../svg/PrinterIcon"
import TrashIcon from "../svg/TrashIcon"
import AddFriedIcon from "../svg/AddFriedIcon"
import React from "react"

const contextItems = {
    sideBarContextItems: [
        {id: 12, title: 'Поделиться списком', icon: <AddFriedIcon/>},
        {id: 13, title: 'Дублировать список', icon: <BulletedIcon/>},
        {id: 14, title: 'Печать списка', icon: <PrinterIcon/>},
        {id: 15, title: '', icon: <hr/>},
        {id: 16, title: 'Удаление списка', icon: <TrashIcon/>},
]
}

export default contextItems