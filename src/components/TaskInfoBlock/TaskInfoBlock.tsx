import React, { FC, useState } from 'react'
import './TaskInfoBlock.scss'
import TaskInfoBlockItem from "../TaskInfoBlockItem/TaskInfoBlockItem"
import SunnyIcon from "../svg/SunnyIcon"
import NotificationIcon from "../svg/NotificationIcon"
import CalendarIcon from "../svg/CalendarIcon"
import RecurringIcon from "../svg/RecurringIcon"
import CategoryIcon from "../svg/CategoryIcon"
import AddIcon from "../svg/AddIcon"
import AttachIcon from "../svg/AttachIcon"
import TaskTitleInput from "../TaskTitleInput/TaskTitleInput"
import TaskAddNoteArea from "../TaskAddNoteArea/TaskAddNoteArea"
import TaskInfoBlockFooter from "../TaskInfoBlockFooter/TaskInfoBlockFooter"

const TaskInfoBlock: FC = () => {

    const [isShowChevron, setIsShowChevron] = useState<boolean>(false)


    const toggleShowChevron = () => setIsShowChevron(!isShowChevron)

    return (
        <div className="task__info-block">
            <div className="task__info-block-wrapper">
                <div className="task__info-block-header">
                    <TaskTitleInput isShowChevron={ isShowChevron } toggleShowChevron={ toggleShowChevron }/>
                    <TaskInfoBlockItem icon={ <AddIcon/> } title={ 'Добавить шаг' } titleBlue unHover/>
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
                <div className="add__note-task">
                     <TaskAddNoteArea/>
                    <div className="task__time-update">Обновлено: несколько секунд назад</div>
                </div>

            </div>
            <TaskInfoBlockFooter/>
        </div>
    )
}

export default TaskInfoBlock