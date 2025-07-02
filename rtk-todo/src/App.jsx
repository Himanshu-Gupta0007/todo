import React from 'react'
import TodoForm from './components/TodoForm'
import Todolist from './components/Todolist'


const App = () => {
  return (
    <>

<div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>Redux Toolkit Todo App</h2>
<TodoForm/>
    <Todolist/>

    </div>
   

    </>
  )
}

export default App