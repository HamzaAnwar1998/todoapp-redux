import React,{useState, useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todoapp/actions';
import { handleEditSubmit } from '../redux/todoapp/actions';

export const Form = ({editFormVisible, editTodo, cancelUpdate}) => {
  // getting dispatch function from useDispatch
  const dispatch = useDispatch();

  // input field state
  const [todoValue, setTodoValue]=useState('');

  // edit input field state
  const [editValue, setEditValue]=useState('');
  useEffect(()=>{
    setEditValue(editTodo.todo)
  },[editTodo])

  // submit event
  const handleSubmit=(e)=>{
      e.preventDefault();
      let date = new Date();
      let time = date.getTime();
      let todoObj={
          id: time,
          todo: todoValue,
          completed: false
      }
      dispatch(addTodo(todoObj));
      setTodoValue('');
  }

  // edit submit function
  const editSubmit=(e)=>{
    e.preventDefault();
    let editedTodoObj={
        id: editTodo.id,
        todo: editValue,
        completed: false
    }
    dispatch(handleEditSubmit(editedTodoObj));
  }

  return (
    <>
    {editFormVisible===false?(
      <form className='form-group custom-form' onSubmit={handleSubmit}>
        <label>Add your todo-items</label>
        <div className='input-and-btn'>
            <input type="text" className='form-control' required
            value={todoValue} onChange={(e)=>setTodoValue(e.target.value)}/>
            <button type="submit" className='btn btn-secondary btn-md'>ADD</button>
        </div>
      </form>
    ):(
      <form className='form-group custom-form' onSubmit={editSubmit}>
          <label>Update your todo-item</label>
          <div className='input-and-btn'>
              <input type="text" className='form-control' required
              value={editValue||""} onChange={(e)=>setEditValue(e.target.value)}/>
              <button type="submit" className='btn btn-secondary btn-md'>Update</button>
          </div>
          <button type="button" className='btn btn-primary btn-md back-btn' 
          onClick={cancelUpdate}>BACK</button>
      </form>
    )}
    </>
  )
}
