import React, { useState,useEffect } from 'react'
import { addTodo } from '../redux/action'
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';



function TodoInput() {
    let [name,setName] = useState();
    const [buckets, setBuckets] = useState([])
    const [todoName, setTodoName] = useState("")
    const [selectedBucket, setSelectedBucket] = useState("")
    const storedBuckets = useSelector(state => state)
    let dispatch = useDispatch()

    useEffect(() => {
        setBuckets(storedBuckets);
    }, []);

    const handleAddBucket=()=>{
        setBuckets([...buckets, {
            name,
            todos:[]
        }])
        alert("Bucket Added Please select the bucket to add todo")
        setName('')
    }

    const handleAddTodoInBucket = () => {
        buckets.map((bucket) => {
            bucket.name === selectedBucket && bucket.todos.push({
                id:uuidv4(),
                name:todoName})
        })
        dispatch(addTodo(
          buckets
        ))
        console.log(buckets)
       
        setName('');
    }
   
    return (
        <div>
            
            <div className="row m-2">
                <input type = "text"
                placeholder = "Enter the bucket" 
                    onChange = {(e) => setName(e.target.value)}
                    value = {name}
                className="col-md-6 offset-sm-3 text-left bg-white" />
                <button 
                // onClick = {()=>{
                //     dispatch(addTodo(
                //         {
                //         id:uuidv4(),
                //         name:name
                //      }
                //     ))
                // setName('');
                // }}
                onClick = {()=>handleAddBucket()
                }
                className = " btn btn-success mx-2">
                    Add
                </button>
            </div>
            <h4>CreateTodo</h4>
            
            <div className="row m-2 px-5">
            <select  
             onChange = {(e)=>setSelectedBucket(e.target.value)}
            className="col-md-6 offset-sm-3 mb-2 text-left bg-white">
                <option>Select</option>
            {buckets.map((bucket)=><option>{bucket.name}</option>
                
                )}
                

            </select>
                <input type = "text"
                disabled = {selectedBucket === ""}
                placeholder = "Enter the task" 
                 onChange = {(e)=>setTodoName(e.target.value)}
                 value =  {todoName}  
                className="col-md-6 offset-sm-3 text-left bg-white" />
                <button 
                 disabled = {selectedBucket === ""}
                onClick = {()=>handleAddTodoInBucket()}
                className = " btn btn-success mx-2">
                    Add
                </button>
            </div>
        </div>
    )
}

export default TodoInput
