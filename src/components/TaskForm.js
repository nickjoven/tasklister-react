import { useState } from 'react'

const TaskForm = ({handleSubmit}) => {
    const [text, setText] = useState('')
    const handleChange = (e) => {
        setText(e.target.value)
    }
    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault()
                handleSubmit(text)
                e.target.reset()
                setText('')
            }}>
                <label>Task Description</label>
                <input type='text' onChange={(e) => {
                    handleChange(e)
                }}></input>
                <input type='submit' value='Create New Task'></input>
            </form>
        </div>
    )
}
export default TaskForm