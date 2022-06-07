import React, { FC, useEffect, useRef, useState } from 'react'
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
import ReminderMenu from "../ReminderMenu/ReminderMenu"
import MenuWrapper from "../MenuWrapper/MenuWrapper"
import DateTimeIcon from "../svg/DateTimeIcon"
import ChevronRight from "../svg/ChevronRight"
import MenuWrapperItem from "../MenuWrapperItem/MenuWrapperItem"
import DateCompletion from "../DateCompletion/DateCompletion"
import RepeatTaskMenu from "../RepeatTaskMenu/RepeatTaskMenu"
import CustomRepeatIcon from "../svg/CustomRepeatIcon"
import SelectCategory from "../SelectCategory/SelectCategory"
import { openTaskInfoAbout } from "../../store/reducers/tasks/action-creators"
import { useDispatch } from "react-redux"

const TaskInfoBlock: FC = () => {

    const dispatch = useDispatch()
    const wrapperRef = useRef(null);
    const [isShowChevron, setIsShowChevron] = useState<boolean>(false)
    const [isShowSomeTaskMenu, setIsShowSomeTaskMenu] = useState<string>('')


    const isShowTaskMenu = (nameMenu: string) => {
        setIsShowSomeTaskMenu(nameMenu)
    }


    const checkClickOutSide = (str: string) => {
        if (str === 'outside') {
            setIsShowSomeTaskMenu('')
        }
    }

    const toggleShowChevron = () => setIsShowChevron(!isShowChevron)



    useOutsideAlerter(wrapperRef);
    function useOutsideAlerter(ref: any) {
        useEffect(() => {
            function handleClickOutside(event: any) {
                // @ts-ignore
                if (ref.current && !ref.current.contains(event.target) && window.screen.width < 769) {
                    dispatch(openTaskInfoAbout(false))
                }
            }

            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }

    return (
        <div className='task__info-block-fullscreen'>
            <div className='task__info-block-full-background'>

            </div>
            <div className="task__info-block" ref={wrapperRef}>
                <div className="task__info-block-wrapper">
                    <div className="task__info-block-header">
                        <TaskTitleInput isShowChevron={ isShowChevron } toggleShowChevron={ toggleShowChevron }/>
                        <TaskInfoBlockItem icon={ <AddIcon/> } title={ 'Добавить шаг' } titleBlue unHover/>
                    </div>
                    {/*<span className="add__task-icon"/>*/ }


                    <TaskInfoBlockItem icon={ <SunnyIcon/> } title={ 'Добавлено в представление "Мой день"' }
                                       titleBlue={ true }/>

                    <div className="task__info-block-set-date">
                        <TaskInfoBlockItem icon={ <NotificationIcon/> } title={ 'Напомнить' }
                                           isShowTaskMenu={ isShowTaskMenu } menuName={ 'ReminderMenu' }/>
                        {
                            isShowSomeTaskMenu === 'ReminderMenu'
                                ? <MenuWrapper checkClickOutSide={ checkClickOutSide } headerTitle={ 'Напоминание' }
                                               children={ <ReminderMenu/> }
                                               footerComponent={ <MenuWrapperItem icon={ <DateTimeIcon/> }
                                                                                  title={ 'Выбрать дату и время' }
                                                                                  time={ <ChevronRight/> }/>
                                               }/>
                                : null
                        }

                        <TaskInfoBlockItem icon={ <CalendarIcon/> } title={ 'Добавить дату выполнения' }
                                           isShowTaskMenu={ isShowTaskMenu } menuName={ 'DateCompletion' }/>
                        { isShowSomeTaskMenu === 'DateCompletion'
                            ? <MenuWrapper checkClickOutSide={ checkClickOutSide } headerTitle={ 'Срок' }
                                           children={ <DateCompletion/> }
                                           footerComponent={ <MenuWrapperItem icon={ <DateTimeIcon/> }
                                                                              title={ 'Выбрать дату' }
                                                                              time={ <ChevronRight/> }/> }/>

                            : null
                        }

                        <TaskInfoBlockItem icon={ <RecurringIcon/> } title={ 'Повтор' }
                                           isShowTaskMenu={ isShowTaskMenu }
                                           menuName={ 'RepeatTaskMenu' }/>


                        { isShowSomeTaskMenu === 'RepeatTaskMenu'
                            ? <MenuWrapper checkClickOutSide={ checkClickOutSide } headerTitle={ 'Повтор' }
                                           children={ <RepeatTaskMenu/> }
                                           footerComponent={ <MenuWrapperItem icon={ <CustomRepeatIcon/> }
                                                                              title={ 'Настроить' }
                                                                              time={ <ChevronRight/> }/> }/>
                            : null
                        }


                    </div>
                    <TaskInfoBlockItem icon={ <CategoryIcon/> } title={ 'Выберите категорию' }
                                       isShowTaskMenu={ isShowTaskMenu }
                                       menuName={ 'SelectCategory' }/>


                    { isShowSomeTaskMenu === 'SelectCategory'
                        ? <MenuWrapper checkClickOutSide={ checkClickOutSide } children={ <SelectCategory/> }/>

                        : null

                    }


                    <TaskInfoBlockItem icon={ <AttachIcon/> } title={ 'Добавить файл' }/>
                    <div className="add__note-task">
                        <TaskAddNoteArea/>
                        <div className="task__time-update">Обновлено: несколько секунд назад</div>
                    </div>

                </div>
                <TaskInfoBlockFooter/>
            </div>
        </div>
    )
}

export default TaskInfoBlock