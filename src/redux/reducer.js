import {ADD_TODO,UPDATE_TODO,DELETE_TODO} from './action'


export let reducer = (state =[], action)=>{
    let newTodos ;
    switch (action.type) {
        case ADD_TODO:
            return [...action.payload]
            
        case DELETE_TODO:
            newTodos = [...state]
           
             newTodos.map((todo)=>{
                 newTodos = [{ todos: todo.todos.filter(todo=>todo.id != action.payload)}]
             })
             console.log(newTodos)
             
            return newTodos;

        case UPDATE_TODO:
             
             newTodos = state
             newTodos.map((bucket) => {
                 bucket.todos.map((todo) => {
                     if(todo.id === action.payload.id) {
                         newTodos = [{name: bucket.name, todos: [action.payload]}]
                     }
                 })
             })
            return newTodos;
            default:
                return state;        
           }
}
