/* eslint-disable array-callback-return */
const initialState=[
    {id: 1, todo: 'Buy Laptop', completed: false},
    {id: 2, todo: 'Master Redux', completed: false},
    {id: 3, todo: 'Watering Plants', completed: true},
];

export const operationsReducer=(state=initialState, action)=>{
    switch(action.type){
        case 'ADD_TODO':
            return [...state, action.payload];
        case 'REMOVE_TODO':
            const filteredTodos = state.filter((todo)=>todo.id !== action.payload);
            return filteredTodos;
        case 'DELETE_ALL':
            return [];
        case 'UPDATE_CHECKBOX':
            let todoArray=[];
            state.map((todo)=>{
                if(todo.id === action.payload){
                    todo.completed = !todo.completed;
                }
                todoArray.push(todo);
            })
            return todoArray; 
        case 'UPDATE_TODO':
            let data = action.payload;
            const updatedTodos = [];
            state.map((item)=>{
                if(item.id===data.id){
                    item.id = data.id;
                    item.todo = data.todo;
                    item.completed = data.completed;
                }
                updatedTodos.push(item);
            })
            return updatedTodos;
        default: return state;
    }
}