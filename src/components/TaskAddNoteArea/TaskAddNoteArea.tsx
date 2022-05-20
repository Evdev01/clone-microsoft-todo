import React, { FC, SyntheticEvent, useRef } from 'react'
import './TaskAddNoteArea.scss'

const TaskAddNoteArea: FC = () => {
    const textRef = useRef<any>()


    const onChangeHandler = function (e: SyntheticEvent) {
        const target = e.target as HTMLTextAreaElement
        textRef.current.style.height = "30px"
        textRef.current.style.height = `${ target.scrollHeight }px`
    }


    return <textarea ref={ textRef } placeholder="Добавить заметку" onChange={ onChangeHandler } rows={ 3 } cols={ 500 }/>
}

export default TaskAddNoteArea