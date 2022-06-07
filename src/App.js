import { useState } from "react";
import { Form } from "./components/Form";
import { Todos } from "./components/Todos";
import {useSelector} from 'react-redux';
import { useDispatch } from "react-redux";
import { deleteAll } from "./redux/todoapp/actions";

function App() {
  // getting data from redux store
  const data = useSelector((state)=>state.operationsReducer);

  // getting dispatch function from useDispatch
  const dispatch = useDispatch();

  // editForm visibility state
  const [editFormVisible, setEditFormVisible]=useState(false);

  // edit form value state
  const [editTodo, setEditTodo]=useState('');

  // edit icon click
  const handleEditClick=(todo)=>{
    setEditFormVisible(true);
    setEditTodo(todo);
  }

  // go back button
  const cancelUpdate=()=>{
    setEditFormVisible(false);
  }

  return (
    <div className="wrapper">
      <br></br>
      <h1 className="text-center">TODO-APP USING REACT-REDUX</h1>
      <Form editFormVisible={editFormVisible} editTodo={editTodo}
      cancelUpdate={cancelUpdate}/>
      <Todos handleEditClick={handleEditClick} editFormVisible={editFormVisible}/>
      {data.length > 0 && (
        <button className="btn btn-danger btn-md delete-all"
        onClick={()=>dispatch(deleteAll())}>DELETE ALL</button>
      ) }
    </div>
  );
}

export default App;
