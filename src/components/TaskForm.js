import React, { useState } from "react"

const TaskForm = ({ handleSubmit }) => {
    const [text, setText] = useState('')
    return (
        <div>
            <form onSubmit={(e) => { e.preventDefault(); handleSubmit(text); e.target.reset(); setText('')}}>
                <label>Task Description:</label>
                <input type='text' onChange={(e) => { setText(e.target.value) }} placeholder='Description'/>
                <input type='submit' value='Create New Task'/>
            </form>
        </div>

    )
}

export default TaskForm