import React, { FC } from 'react'
import './AddTaskBlock.scss'
import AddTaskPanel from "../AddTaskPanel/index"

const AddTaskBlock: FC = () => {
    return (
        <div className='add__task-block'>
            <AddTaskPanel/>
        </div>
    )
}

export default AddTaskBlock