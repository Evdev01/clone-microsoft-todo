import React, { FC } from 'react'
import './SelectCategoryItem.scss'
import SelectCategoryCircle from "../SelectCategoryCircle/SelectCategoryCircle"

interface TRepeatTaskMenuItemProps {
    title: string
    colorIcon: string

}

const SelectCategoryItem:FC<TRepeatTaskMenuItemProps> = ({title, colorIcon}) => {


    return (
        <div className="repeat__task-item">
            <SelectCategoryCircle colorIcon={colorIcon}/>
            <p>{title}</p>
        </div>
    )
}

export default SelectCategoryItem