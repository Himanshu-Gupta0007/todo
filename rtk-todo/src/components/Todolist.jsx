
import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { deleteTodo , toggleComplete } from '../features/todos/todoSlice'

const Todolist = () => {

  const todos = useSelector(state => state.todos.todos);
  const dispatch = useDispatch();

  
  return (
    <>
     <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          <span
            style={{ textDecoration: todo.completed ? 'line-through' : 'none', cursor: 'pointer' }}
            onClick={() => dispatch(toggleComplete(todo.id))}
          >
            {todo.text}
          </span>
          <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
        </li>
      ))}
    </ul>


    </>
  )
}

export default Todolist