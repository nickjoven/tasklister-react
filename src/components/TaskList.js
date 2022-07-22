import React from "react";
import Task from "./Task";

const TaskList = () => {
    return (
        <div>
            <h3>My To-dos</h3>
            <ul>
                <Task />
            </ul>
        </div>
    )
}

export default TaskList