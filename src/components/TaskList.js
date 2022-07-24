import Task from './Task'

const TaskList = ( {tasks} ) => {
    return (
        <div>
            <h3>My To-Dos</h3>
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