import React, { useState } from 'react';
import './App.css';
import Banner from './components/Banner'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'


const App = () => {
  const [tasks, setTasks] = useState([])

  const handleSubmit = (text) => {
    setTasks([...tasks, text])
  }

  const handleDelete = (e) => {
    setTasks([tasks.filter(word => {
      return word != e.target.textContent
    })])
  }

  return (
    <div className="App">
      <Banner bannerText='Task Lister React' />
      <TaskForm handleSubmit={handleSubmit} />
      <TaskList tasks={tasks} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
