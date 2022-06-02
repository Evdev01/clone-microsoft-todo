import React from 'react'
import './SelectCategory.scss'
import SelectCategoryItem from "../SelectCategoryItem/SelectCategoryItem"

const SelectCategory = () => {
    return (
        <div className='select__category'>
            <SelectCategoryItem title={ 'Blue category' } colorIcon={'#9FDFF1'}/>
            <SelectCategoryItem title={ 'Red category' } colorIcon={'#F7C2C6'}/>
            <SelectCategoryItem title={ 'Yellow category' } colorIcon={'#FFF873'}/>
            <SelectCategoryItem title={ 'Orange category' } colorIcon={'#FFD7A7'}/>
            <SelectCategoryItem title={ 'Purple category' } colorIcon={'#C1AFDA'}/>
            <SelectCategoryItem title={ 'Green category' } colorIcon={'#94E490'}/>
        </div>
    )
}

export default SelectCategory