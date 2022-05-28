import { useState, useEffect, useRef, useLayoutEffect } from 'react';
import './CustomContextMenu.scss';
import ContextMenuItem from "../ContextMenuItem.tsx/ContextMenuItem"
import ContextMenuInnerItem from "../ContextMenuInnerItem/ContextMenuInnerItem"

// @ts-ignore
const MyCustomContextMenu= ({ targetId, options, classes, innerOptions }) => {
    console.log(innerOptions)
    const [contextData, setContextData]= useState({ visible:false, posX: 0, posY: 0});
    const contextRef= useRef(null);
    const [isShowInnerMenu, setIsShowInnerMenu] = useState(false)

    useEffect(() => {
        {/*
 // @ts-ignore */}
        const contextMenuEventHandler= (event) => {
            const targetElement= document.getElementById(targetId)
            if(targetElement && targetElement.contains(event.target)){
                event.preventDefault();
                setContextData({ visible: true, posX: event.clientX, posY: event.clientY })
                {/*
 // @ts-ignore */}
            }else if(contextRef.current && !contextRef.current.contains(event.target)){
                setContextData({ ...contextData, visible: false })
            }
        }
        {/*

 // @ts-ignore */}
        const offClickHandler= (event) => {
            setIsShowInnerMenu(false)
            {/*
 // @ts-ignore */}
            if(contextRef.current && !contextRef.current.contains(event.target)){
                setContextData({ ...contextData, visible: false })
            }
        }

        document.addEventListener('contextmenu', contextMenuEventHandler)
        document.addEventListener('click', offClickHandler)
        return () => {
            document.removeEventListener('contextmenu', contextMenuEventHandler)
            document.removeEventListener('click', offClickHandler)
        }
    }, [contextData, targetId])

    useLayoutEffect(() => {
        {/*
 // @ts-ignore */}
        if(contextData.posX + contextRef.current?.offsetWidth > window.innerWidth){
            {/*
 // @ts-ignore */}
            setContextData({ ...contextData, posX: contextData.posX - contextRef.current?.offsetWidth})
        }
        {/*
 // @ts-ignore */}
        if(contextData.posY + contextRef.current?.offsetHeight > window.innerHeight){
            {/*
 // @ts-ignore */}
            setContextData({ ...contextData, posY: contextData.posY - contextRef.current?.offsetHeight})
        }
    }, [contextData])

    return (
            <div ref={ contextRef } className="contextMenu" style={ {
                display: `${ contextData.visible ? 'flex' : 'none' }`,
                left: contextData.posX,
                top: contextData.posY
            } }>
                <div className={ `optionsList ${ classes?.listWrapper }` }>
                    {/*
 // @ts-ignore */ }
                    { options.map(option => <ContextMenuItem option={ option } classes={ classes } key={option.id} setIsShowInnerMenu={setIsShowInnerMenu}/>) }
                </div>

                {isShowInnerMenu
                    ? <div className="contextMenu__inner">{innerOptions.map((item: any) => <ContextMenuInnerItem title={item.title} key={item.id} classes={classes}/>)}</div>
                    : null
                }
            </div>


    );
}

export default MyCustomContextMenu;