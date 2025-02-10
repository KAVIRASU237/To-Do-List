import React, { useState } from 'react'

const Todoitems = ({text,isComplete,id,toggleTask,deleteTodo}) => {
    
  const [toggleStrike, setTogglestrike] = useState(false)
  function toggleStrikethrough() {
    setTogglestrike(!toggleStrike)
  }

  return (
    <div className='todoitems'>
      <label onClick={toggleStrikethrough} style={{textDecoration: toggleStrike ? "line-through" : "none"}}>{text}</label>
      <button className='deleteBtn' type='delete' onClick={() => deleteTodo(id)}>Delete</button>
      
             
    </div>
  )
}

export default Todoitems
