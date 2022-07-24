const Task = ({text, handleDelete}) => {
    return (
        <li onClick={(e) => {handleDelete(e)}}>{text}</li>
    )
}

export default Task