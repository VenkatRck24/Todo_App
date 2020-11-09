import React, { useReducer } from 'react'
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem'
import './TodoList.css';



 function TodoList() {
     let todos = useSelector(state => state)
     
    return (
        <div className = "my-4">
            {todos.map((todo) =>{
                return (
                    todo.todos.length !== 0 && <div className="buckets">
                        <h4>BUCKET: {todo.name}</h4>
                        {
                            todo.todos.map((todoValue)=>
                            <TodoItem key = {todoValue.id} todo = {todoValue}/>
                            )
                        }
                    </div>
                    
                )
            })}
        </div>
    )
}

export default TodoList