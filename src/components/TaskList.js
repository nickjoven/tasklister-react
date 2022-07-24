import Task from './Task'

const TaskList = ({tasks}) => {
    return (
        <div className='Task-List'>
            <h3>My To-Do's</h3>
            <ul>
                {tasks.map((element, index) => {
                    return (
                        <Task key={index} text={element} />
                    )
                })}
            </ul>
        </div>
    )
}

export default TaskList