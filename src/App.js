import React from 'react';
import logo from './logo.svg';
import './App.css';
import Banner from './components/Banner'
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList'

function App() {
  return (
    <div className="App">
      <Banner bannerText={'Task Lister React™'}/>
      <TaskForm />
      <TaskList />
    </div>
  );
}

export default App;
