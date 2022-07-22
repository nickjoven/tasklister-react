import React, { useState } from 'react';
import './App.css';
import Banner from './components/Banner'
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList'

const App = () => {
  const [tasks, setTasks] = useState([])

  const handleSubmit = (text) => {
    if (text) {
      setTasks([...tasks, text])
      console.log('Form submitted')
    }
  }

  return (
    <div className="App">
      <Banner bannerText={'Task Lister React™'}/>
      <TaskForm handleSubmit={handleSubmit}/>
      <TaskList tasks={tasks}/>
    </div>
  );
}

export default App;
