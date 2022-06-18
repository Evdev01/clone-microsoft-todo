import React, { FC, useEffect, useRef, useState } from 'react'
import './ToggleButton.scss'


interface IToggleButtonProps {
    checked: boolean
}


const ToggleButton:FC<IToggleButtonProps> = ({checked}) => {

    const onRefChange = useRef<any>()
    const [isCheckedInput, setIsCheckedInput] = useState<boolean>(false)

    useEffect(() => {
        onRefChange.current.checked = checked
        setIsCheckedInput(checked)
    }, [])

    const watchInputChecked = () => setIsCheckedInput(onRefChange.current.checked ?? false)


    return (
        <div className="container">
            <input type="checkbox" onClick={ watchInputChecked } ref={ onRefChange }
                   className="toggle-button"/>
            <label htmlFor="toggle-button" className="text">
                { isCheckedInput ? 'Включено' : 'Выключено' }
            </label>
        </div>
    )
}

export default ToggleButton