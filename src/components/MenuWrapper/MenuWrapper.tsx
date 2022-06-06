import React, { FC, useEffect, useRef, useState } from 'react'
import './MenuWrapper.scss'

interface TMenuWrapperProps {
    headerTitle?: string
    children: any
    footerComponent?: any
    checkClickOutSide: any
}

const MenuWrapper: FC<TMenuWrapperProps> = ({ headerTitle, children, footerComponent, checkClickOutSide }) => {

    const wrapperRef = useRef(null);

    useOutsideAlerter(wrapperRef);
    const [chekOutSideClick, setChekOutSideClick] = useState('')

    useEffect(() => {
        checkClickOutSide(chekOutSideClick)
    }, [chekOutSideClick])


    function useOutsideAlerter(ref: any) {
        useEffect(() => {
            function handleClickOutside(event: any) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setChekOutSideClick('outside')
                }
            }

            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }



    return (
        <div>
        <div className="menu__wrapper" ref={wrapperRef}>
            {headerTitle
                ?    <div><p className="menu__wrapper-title">{ headerTitle }</p> <hr/></div>
                : null
            }

            { children }


            { !!footerComponent
                ? <div className="menu__wrapper-footer">
                    <hr/>
                    { footerComponent }
                </div>
                : null
            }


        </div>
        </div>
    )
}



export default MenuWrapper