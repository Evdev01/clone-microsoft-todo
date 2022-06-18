import React, { FC } from 'react'
import './SelectCategoryCircle.scss'

interface ISelectCategoryCircleProps {
    colorIcon: string
}

const SelectCategoryCircle:FC<ISelectCategoryCircleProps> = ({colorIcon}) => {
    return (
        <span className="select__category-circle" style={{backgroundColor: colorIcon}}>

        </span>
    )
}

export default SelectCategoryCircle