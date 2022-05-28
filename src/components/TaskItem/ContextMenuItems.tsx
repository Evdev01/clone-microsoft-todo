import SunnyIcon from "../svg/SunnyIcon"
import IconStar from "../svg/IconStar"
import CheckBoxCircleDone from "../svg/CheckBoxCircleDone"
import TodayIcon from "../svg/TodayIcon"
import TomorrowIcon from "../svg/TomorrowIcon"
import AddIcon from "../svg/AddIcon"
import SelectList from "../svg/SelectList"
import BulletedIcon from "../svg/BulletedIcon"
import CopyIcon from "../svg/CopyIcon"
import TrashIcon from "../svg/TrashIcon"
import React from "react"

// todo delete this file when will be back-end

const contextItems = {
    contextMenuItems: [
        {id: 1, title: 'Удалить из представления "Мой день"', icon: <SunnyIcon/>},
        {id: 2, title: 'Пометить как важную', icon: <IconStar/>},
        {id: 3, title: 'Пометить как завершенные', icon: <CheckBoxCircleDone/>},
        {id: 4, title: '', icon: <hr/>},
        {id: 5, title: 'Со сроком сегодня', icon: <TodayIcon/>},
        {id: 6, title: 'Со сроком завтра', icon: <TomorrowIcon/>},
        {id: 7, title: '', icon: <hr/>},
        {id: 8, title: 'Создать список из этой задачи', icon: <AddIcon/>},
        {id: 9, title: 'Переместить задачу...', icon: <SelectList/>, innerItem: {
                icon: <BulletedIcon/>, title: 'someTitle'
            }},
        {id: 10, title: 'Копировать задачу...', icon: <CopyIcon/>, innerItem: {
                icon: <BulletedIcon/>, title: 'someTitle'
            }},
        {id: 11, title: 'Удалить задачу', icon: <TrashIcon/>}
    ],
    contextMenuInnerItems: [
        {id: 1, title: 'Домашние дела', },
        {id: 2, title: 'Личные дела', },
        {id: 3, title: 'Рабочие моменты', },
    ]
}

export default contextItems