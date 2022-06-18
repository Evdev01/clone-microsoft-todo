import React, { FC } from 'react'
import './SelectCategoryItem.scss'
import SelectCategoryCircle from "../SelectCategoryCircle/SelectCategoryCircle"

interface IRepeatTaskMenuItemProps {
    title: string
    colorIcon: string

}

const SelectCategoryItem:FC<IRepeatTaskMenuItemProps> = ({title, colorIcon}) => {


    return (
        <div className="repeat__task-item">
            <SelectCategoryCircle colorIcon={colorIcon}/>
            <p>{title}</p>
        </div>
    )
}

export default SelectCategoryItem