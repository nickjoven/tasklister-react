import { useState } from 'react'

const TaskForm = ({handleSubmit}) => {
    const [text, setText] = useState('')
    const handleChange = (e) => {
        setText(e.target.value)
    }

    return (
        <div className='Task-Form'>
            <form onSubmit={(e) => {
                e.preventDefault()
                handleSubmit(text)
                e.target.reset()
                setText('')
            }}>
                <label>Task Descripton: </label>
                <input type='text' onChange={(e) => {
                    handleChange(e)
                }} />
                <input type='submit' value='Create New Task' />
            </form>
        </div>
    )
}

export default TaskForm