/*
Create a component called App that render a signup for a user account.
The user must sign up by providing their first name, last name, email
address, password. Upon submitting the form, there must be some check
to ensure that the user's email address input does include an "@"
symbol. The submit event will then send a POST request with ALL of the
data in the form to the server: 'http://example.com/signup'

The signup form does not need to be its own component for this exercise
*/

import React, { useState } from 'react';
import './App.css';

const initialUser = {
  firstName: '',
  email: '',
  password: '',
}

const App = () => {
  const [user, setUser] = useState(initialUser)
  const [emailValidity, setEmailValidity] = useState(false)

  const handleSubmit = () => {
    if (!emailValidity) {
      return alert('invalid email')
    } else {
      fetch('http://example.com/signup', {
        method: 'POST',
        mode: 'cors',
        headers:
        {"Content-Type": "application/json",
        Accept: "application/json"},
        body: JSON.stringify(user)
      })
      .then(console.log('posted', JSON.stringify(user)))
    }
    // console.log(user)
  }

  const handleEmailValidity = (name, value) => {
    if (name === 'email') {
      if (value.includes('@')) {
      console.log(name, 'includes @')
      setEmailValidity(true)
      } else if (!value.includes('@')) {
        console.log(name, 'lacks @')
        setEmailValidity(false)
      }
    } 
  }
  
  
  const handleChange = (e) => {
    const { name, value } = e.target
    handleEmailValidity(name, value)
    setUser({
      ...user,
      [name]: value
    })
  }

  return (
    <div className="App">
      <form onSubmit={(e) => {
        e.preventDefault()
        handleSubmit()
        e.target.reset()
        setuser(initialUser)
      }}>
        <label>User Registration: </label>
        <input type='text' onChange={handleChange} name='firstName' value={user.firstName} placeholder='John' />
        <input type='text' onChange={handleChange} name='email' value={user.email} placeholder='john@example.com'/>
        <input type='password' onChange={handleChange} name='password' value={user.password} placeholder='password123' />
        <input type='submit' value=' Sign Up ' />
      </form>
    </div>
  );
}

export default App;
