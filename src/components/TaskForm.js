import { useState } from 'react'

const TaskForm = ({handleSubmit}) => {
    const [text, setText] = useState('')
    const handleChange = (e) => {
        setText(e.target.value)
    }
    return (
        <div className='Task-From'>
            <form onSubmit={(e) => {
                e.preventDefault()
                handleSubmit(text)
                e.target.reset()
                setText('')
            }}>
                <label>Task Description</label>
                <input onChange={handleChange} placeholder='Description'></input>
                <input type='submit' value='Create New Task'></input>
            </form>
        </div>
    )
}

export default TaskForm