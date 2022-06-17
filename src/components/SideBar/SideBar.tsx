import React, { FC, useEffect, useRef } from 'react'
import './SideBar.scss'
import BurgerMenu from '../BurgerMenu/BurgerMenu'
import SideBarSortableItem from '../SideBarSortable/SideBarSortableItem'
import SideBarMain from '../SideBarMain/SideBarMain'
import SideBarItem from '../SideBarItem/SideBarItem'
import SideBarCreateList from '../SideBarCreateList/SideBarCreateList'
import SideBarFooter from '../SideBarFooter/SideBarFooter'
import { useTypedSelector } from "../../hooks/useTypedSelector"

interface TSideBarProps {
    openBurgerMenu: () => void
    setIsShowSideBar: any
}

const SideBar: FC<TSideBarProps> = ({ openBurgerMenu, setIsShowSideBar }) => {

    const wrapperRef = useRef(null)

    const { user }: any = useTypedSelector(state => state.profile)


    const getGroupTasks = user.createdTasksGroup


    useOutsideAlerter(wrapperRef)

    function useOutsideAlerter(ref: any) {
        useEffect(() => {
            function handleClickOutside(event: any) {
                // @ts-ignore
                if (ref.current && !ref.current.contains(event.target) && window.screen.width < 769) {
                    setIsShowSideBar(false)
                }
            }

            document.addEventListener("mousedown", handleClickOutside)
            return () => {
                document.removeEventListener("mousedown", handleClickOutside)
            }
        }, [ref])
    }

    return (

        <div className="side__bar-wrapper-fullscreen">
            <div className="side__bar" ref={ wrapperRef }>
                <BurgerMenu openBurgerMenu={ openBurgerMenu }/>
                <div className="side__bar-wrapper fullscreen">
                    <SideBarMain/>
                    <SideBarSortableItem/>
                    {
                        getGroupTasks.map((taskGroup: any) => <SideBarItem taskGroup={taskGroup} key={ taskGroup.id }
                                                                           id={taskGroup.id}
                                                                                                title={ taskGroup.groupName }
                                                                                                route={ taskGroup.route }/>)
                    }
                </div>
                <SideBarCreateList/>
                <SideBarFooter/>
            </div>
            <div className="side__bar-full-background">

            </div>
        </div>

    )
}

export default SideBar