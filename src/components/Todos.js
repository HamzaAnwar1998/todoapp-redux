import React from 'react'
import { useSelector } from "react-redux";
import { Icon } from 'react-icons-kit'
import {trash} from 'react-icons-kit/feather/trash'
import {edit2} from 'react-icons-kit/feather/edit2'
import { useDispatch } from 'react-redux';
import { removeTodo } from '../redux/todoapp/actions';
import { handleCheckbox } from '../redux/todoapp/actions';

export const Todos = ({handleEditClick, editFormVisible}) => {
  // getting dispatch function from useDispatch
  const dispatch = useDispatch();

  // getting todos from redux store
  const todos = useSelector((state)=>state.operationsReducer);

  return todos.map((todo)=>(
      <div key={todo.id} className='todo-box'>
          <div className='content'>
            {editFormVisible===false&&(
               <input type="checkbox" checked={todo.completed}
               onChange={()=>dispatch(handleCheckbox(todo.id))}></input>
           )}
            <p style={todo.completed===true?{textDecoration:'line-through'}:{textDecoration:'none'}}>{todo.todo}</p>
          </div>
          <div className='actions-box'>
              {editFormVisible===false&&(
                <>
                  <span onClick={()=>handleEditClick(todo)}><Icon icon={edit2}/></span>
                  <span onClick={()=>dispatch(removeTodo(todo.id))}><Icon icon={trash}/></span>
                </>
              )}
          </div>
      </div>
  ))
}
