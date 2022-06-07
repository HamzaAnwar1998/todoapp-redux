const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';
const DELETE_ALL = 'DELETE_ALL';
const UPDATE_CHECKBOX = 'UPDATE_CHECKBOX';
const UPDATE_TODO = 'UPDATE_TODO';

export const addTodo = (payload) =>{
    return{
        type: ADD_TODO,
        payload
    }
}

export const removeTodo=(payload)=>{
    return{
        type: REMOVE_TODO,
        payload
    }
}

export const handleCheckbox=(payload)=>{
    return{
        type: UPDATE_CHECKBOX,
        payload
    }
}

export const deleteAll=()=>{
    return{
        type: DELETE_ALL
    }
}

export const handleEditSubmit=(payload)=>({
    type: UPDATE_TODO,
    payload
})