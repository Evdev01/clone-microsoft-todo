import React, { FC, useState } from 'react'
import './TaskInfoBlock.scss'
import TaskInfoBlockItem from "../TaskInfoBlockItem/TaskInfoBlockItem"
import SunnyIcon from "../svg/SunnyIcon"
import ChevronDown from "../svg/ChevronDown"
import IconStar from "../svg/IconStar"
import NotificationIcon from "../svg/NotificationIcon"
import CalendarIcon from "../svg/CalendarIcon"
import RecurringIcon from "../svg/RecurringIcon"
import CategoryIcon from "../svg/CategoryIcon"
import AddIcon from "../svg/AddIcon"
import AttachIcon from "../svg/AttachIcon"

const TaskInfoBlock: FC = () => {

    const [isShowChevron, setIsShowChevron] = useState<boolean>(false)

    const toggleShowChevron = () => setIsShowChevron(!isShowChevron)

    return (
        <div className="task__info-block">
            <div className="task__info-block-wrapper">
                <div className="task__info-block-header">
                    <div className="task__info-block-header-wrapper">
                        <div className="task__info-block-header-info">
                        <span className="add__task-icon-blue" onMouseEnter={ toggleShowChevron }
                              onMouseLeave={ toggleShowChevron }>
                                            { isShowChevron ? <ChevronDown/> : null }
                        </span>
                            <p>Task name</p>
                        </div>
                        <IconStar/>
                    </div>
                    <TaskInfoBlockItem icon={ <AddIcon/> } title={ 'Добавить шаг' } titleBlue/>
                </div>
                {/*<span className="add__task-icon"/>*/ }


                <TaskInfoBlockItem icon={ <SunnyIcon/> } title={ 'Добавлено в представление "Мой день"' }
                                   titleBlue={ true }/>

                <div className="task__info-block-set-date">
                    <TaskInfoBlockItem icon={ <NotificationIcon/> } title={ 'Напомнить' }/>
                    <TaskInfoBlockItem icon={ <CalendarIcon/> } title={ 'Добавить дату выполнения' }/>
                    <TaskInfoBlockItem icon={ <RecurringIcon/> } title={ 'Повтор' }/>
                </div>
                <TaskInfoBlockItem icon={ <CategoryIcon/> } title={ 'Выберите категорию' }/>
                <TaskInfoBlockItem icon={ <AttachIcon/> } title={ 'Добавить файл' }/>
                <TaskInfoBlockItem title={ 'Добавить заметку' }/>

            </div>
        </div>
    )
}

export default TaskInfoBlock