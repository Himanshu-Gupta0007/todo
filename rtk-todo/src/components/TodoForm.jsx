
import React, { useState } from 'react'
import { addTodo  } from '../features/todos/todoSlice';
import { useDispatch } from 'react-redux';

  const TodoForm = () => {
    const [text , setText] = useState('');
    const dispatch = useDispatch()


    const handleSubmit  = (e)=>{
        e.preventDefault()
        if(text.trim()){
            dispatch(addTodo(text))
            setText('')
        }
    }

  return (
    <>
    <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="add todo"
        />
        <button type="submit">submit</button>
      </form>


    </>
  )
}

export default TodoForm