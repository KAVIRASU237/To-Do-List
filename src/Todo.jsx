import React, { useEffect, useRef } from 'react'
import Todoitems from './Todoitems'
import { useState } from 'react';

const Todo = () => {

    const [todolist,settodolist]= useState(localStorage.getItem("todos")?JSON.parse
   (localStorage.getItem("todos")): []);
const inputRef=useRef();

//update local storage 
useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todolist));
},[todolist]);


const addtask = () =>{
    const inputtext=inputRef.current.value.trim();
    if(inputtext === ""){
        return null;
    }
    const newTodo = {
        id: Date.now(),
        text:inputtext,
        isComplete: false,
    };
    settodolist((prev)=> [...prev,newTodo])
    inputRef.current.value="";
}

//update add status
const toggletask= (id) => {
    settodolist((prev) => {
        return prev.map((todo)=>{
            if(id === todo.id){
                return {...todo, isComplete: !todo.isComplete}
            }
            return todo;
        });
    });
};

//delete
const deleteTodo = (id)=>{
    settodolist((prev)=>{
        return prev.filter((todo) => todo.id !== id)
    })
}
  return (
    <div>
      
      <h1>To-Do-List</h1>
      <label>
      <input type='text' ref={inputRef} className='taskInput'placeholder='    Assign Your Task Here'/>
      </label>
      <button type='submit' className='addTask' onClick={addtask} >Add Task</button>
      {/* <h4> Fill Task Details</h4> */}
      <div>
        <fieldset>
            <legend>List Of Tasks</legend>
            {/* Todo items*/}
            {todolist.length===0?(<p>No tasks Found</p>):(
                todolist.map((todo,index)=>{
                    return   <Todoitems text={todo.text} key={index} isComplete={todo.isComplete} id={todo.id}  toggletask={toggletask} deleteTodo={deleteTodo}/>
                })
            )}
          
           
        </fieldset>
      </div>
    </div>
  )
}

export default Todo
