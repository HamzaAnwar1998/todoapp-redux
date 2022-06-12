import React from 'react'
import { useSelector } from 'react-redux';
import { Icon } from 'react-icons-kit';
import {trash} from 'react-icons-kit/feather/trash'
import {edit2} from 'react-icons-kit/feather/edit2'

export const Todos = ({handleEditClick, editFormVisibility}) => {
  const todos = useSelector((state)=>state.operationsReducer);
  return todos.map((todo)=>(
    <div key={todo.id} className='todo-box'>
        <div className='content'>
            <input type="checkbox" checked={todo.completed}></input>
            <p style={todo.completed===true?{textDecoration:'line-through'}:{textDecoration:'none'}}>
                {todo.todo}
            </p>
        </div>
        <div className='actions-box'>
          <span><Icon icon={edit2}/></span>
          <span><Icon icon={trash}/></span>
        </div>
    </div>
  ))
}
