import React, { FC, useCallback, useEffect, useRef, useState } from 'react'
import './TaskInfoBlock.scss'
import TaskInfoBlockItem from "../TaskInfoBlockItem"
import SunnyIcon from "../svg/SunnyIcon"
import NotificationIcon from "../svg/NotificationIcon"
import CalendarIcon from "../svg/CalendarIcon"
import RecurringIcon from "../svg/RecurringIcon"
import CategoryIcon from "../svg/CategoryIcon"
import AddIcon from "../svg/AddIcon"
import AttachIcon from "../svg/AttachIcon"
import TaskTitleInput from "../TaskTitleInput"
import TaskAddNoteArea from "../TaskAddNoteArea"
import TaskInfoBlockFooter from "../TaskInfoBlockFooter"
import ReminderMenu from "../ReminderMenu/ReminderMenu"
import MenuWrapper from "../MenuWrapper"
import DateTimeIcon from "../svg/DateTimeIcon"
import ChevronRight from "../svg/ChevronRight"
import MenuWrapperItem from "../MenuWrapperItem"
import DateCompletion from "../DateCompletion"
import RepeatTaskMenu from "../RepeatTaskMenu"
import CustomRepeatIcon from "../svg/CustomRepeatIcon"
import SelectCategory from "../SelectCategory"
import { openTaskInfoAbout } from "../../store/reducers/tasks/action-creators"
import { useDispatch } from "react-redux"

const TaskInfoBlock: FC = () => {

    const dispatch = useDispatch()
    const wrapperRef = useRef(null)
    const [isShowChevron, setIsShowChevron] = useState<boolean>(false)
    const [isShowSomeTaskMenu, setIsShowSomeTaskMenu] = useState<string>('')


    const isShowTaskMenu = useCallback((nameMenu: string) => {
        setIsShowSomeTaskMenu(nameMenu)
    }, [isShowSomeTaskMenu])


    const checkClickOutSide = useCallback((str: string) => {
        if (str === 'outside') {
            setIsShowSomeTaskMenu('')
        }
    }, [isShowSomeTaskMenu])



    const toggleShowChevron = useCallback(() => {
        setIsShowChevron(!isShowChevron)
        }, [isShowChevron])


    useOutsideAlerter(wrapperRef)

    function useOutsideAlerter(ref: any) {
        useEffect(() => {
            function handleClickOutside(event: any) {
                // @ts-ignore
                if (ref.current && !ref.current.contains(event.target) && window.screen.width < 769) {
                    dispatch(openTaskInfoAbout(false))
                }
            }

            document.addEventListener("mousedown", handleClickOutside)
            return () => {
                document.removeEventListener("mousedown", handleClickOutside)
            }
        }, [ref])
    }

    return (
        <div className="task__info-block-fullscreen">
            <div className="task__info-block-full-background">

            </div>
            <div className="task__info-block" ref={ wrapperRef }>
                <div className="task__info-block-wrapper">
                    <div className="task__info-block-header">
                        <TaskTitleInput isShowChevron={ isShowChevron } toggleShowChevron={ toggleShowChevron }/>
                        <TaskInfoBlockItem icon={ <AddIcon/> } title={ '???????????????? ??????' } titleBlue unHover/>
                    </div>

                    <TaskInfoBlockItem icon={ <SunnyIcon/> } title={ '?????????????????? ?? ?????????????????????????? "?????? ????????"' }
                                       titleBlue={ true }/>

                    <div className="task__info-block-set-date">
                        <TaskInfoBlockItem icon={ <NotificationIcon/> } title={ '??????????????????' }
                                           isShowTaskMenu={ isShowTaskMenu } menuName={ 'ReminderMenu' }/>
                        {
                            isShowSomeTaskMenu === 'ReminderMenu'
                                ? <MenuWrapper checkClickOutSide={ checkClickOutSide } headerTitle={ '??????????????????????' }
                                               children={ <ReminderMenu/> }
                                               footerComponent={ <MenuWrapperItem icon={ <DateTimeIcon/> }
                                                                                  title={ '?????????????? ???????? ?? ??????????' }
                                                                                  time={ <ChevronRight/> }/>
                                               }/>
                                : null
                        }

                        <TaskInfoBlockItem icon={ <CalendarIcon/> } title={ '???????????????? ???????? ????????????????????' }
                                           isShowTaskMenu={ isShowTaskMenu } menuName={ 'DateCompletion' }/>
                        { isShowSomeTaskMenu === 'DateCompletion'
                            ? <MenuWrapper checkClickOutSide={ checkClickOutSide } headerTitle={ '????????' }
                                           children={ <DateCompletion/> }
                                           footerComponent={ <MenuWrapperItem icon={ <DateTimeIcon/> }
                                                                              title={ '?????????????? ????????' }
                                                                              time={ <ChevronRight/> }/> }/>

                            : null
                        }

                        <TaskInfoBlockItem icon={ <RecurringIcon/> } title={ '????????????' }
                                           isShowTaskMenu={ isShowTaskMenu }
                                           menuName={ 'RepeatTaskMenu' }/>


                        { isShowSomeTaskMenu === 'RepeatTaskMenu'
                            ? <MenuWrapper checkClickOutSide={ checkClickOutSide } headerTitle={ '????????????' }
                                           children={ <RepeatTaskMenu/> }
                                           footerComponent={ <MenuWrapperItem icon={ <CustomRepeatIcon/> }
                                                                              title={ '??????????????????' }
                                                                              time={ <ChevronRight/> }/> }/>
                            : null
                        }


                    </div>
                    <TaskInfoBlockItem icon={ <CategoryIcon/> } title={ '???????????????? ??????????????????' }
                                       isShowTaskMenu={ isShowTaskMenu }
                                       menuName={ 'SelectCategory' }/>


                    { isShowSomeTaskMenu === 'SelectCategory'
                        ? <MenuWrapper checkClickOutSide={ checkClickOutSide } children={ <SelectCategory/> }/>

                        : null

                    }


                    <TaskInfoBlockItem icon={ <AttachIcon/> } title={ '???????????????? ????????' }/>
                    <div className="add__note-task">
                        <TaskAddNoteArea/>
                        <div className="task__time-update">??????????????????: ?????????????????? ???????????? ??????????</div>
                    </div>

                </div>
                <TaskInfoBlockFooter/>
            </div>
        </div>
    )
}

export default TaskInfoBlock