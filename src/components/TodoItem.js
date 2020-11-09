import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { compose } from 'redux';
import { deleteTodo, updateTodo } from '../redux/action'

function TodoItem({todo}) {
    console.log(todo)
    const [editable,setEditable] = useState(false);
    const [name, setName] = useState(todo.name)
    let dispatch = useDispatch()
    return (
       <div>
             <div className="row mx-5 align-items-center">
              <div className = "font-weight-bold ">  
             
             <input type="checkbox" className="form-check-input" id="materialChecked2" />
             <label>Mark as Complete</label>
             </div>  
                   
                    
                    <div className="col text-center" >
                    {editable ? <input type="text" className="form-control"  
                    value={name}
                    onChange = {
                        (e) => setName(e.target.value)
                    }
                    />:<h5>{todo.name}</h5> }
                    
                </div>
               
                <button 
                    onClick = {()=>{
                       
                        dispatch(updateTodo(
                            {
                                ...todo,
                                name
                            }
                        ))
                        if(editable){
                           setName(todo.name) 
                        }
                        setEditable(!editable)
                        
                    }}
                          
                className="btn btn-primary m-2">{editable?"Update":"Edit"}</button>
                <button 
                onClick = {()=>dispatch(deleteTodo(todo.id))}
                className="btn btn-danger m-2">
                Delete</button>


            </div>
        </div>
    )
}

export default TodoItem
