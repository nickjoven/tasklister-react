import Task from './Task'

const TaskList = ({tasks, handleDelete}) => {
    return (
        <div className='Task-List'>
            <h3>My To-Do's</h3>
            <ul>
                {tasks.map((element, index) => {
                    return (
                        <Task key={index} text={element} handleDelete={handleDelete} />
                    )
                })}
            </ul>
        </div>
    )
}

export default TaskList