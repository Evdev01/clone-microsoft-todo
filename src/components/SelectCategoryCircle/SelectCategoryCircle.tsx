import React, { FC } from 'react'
import './SelectCategoryCircle.scss'

interface TSelectCategoryCircleProps {
    colorIcon: string
}

const SelectCategoryCircle:FC<TSelectCategoryCircleProps> = ({colorIcon}) => {
    return (
        <span className="select__category-circle" style={{backgroundColor: colorIcon}}>

        </span>
    )
}

export default SelectCategoryCircle