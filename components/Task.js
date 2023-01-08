import React from 'react'

const Task = (props) => {
  return (
    <div className='task' id={props.id}>

        {props.state==false ?
        <input onClick={props.handleCheck} className="task__checkbox" type="checkbox" id="scales" name="scales"></input> :
        <input onClick={props.handleCheck}  type="checkbox" id="scales" name="scales" defaultChecked></input>}
        <input type="text" className="task__input" defaultValue={props.task} disabled/>
        <button onClick={props.editTask} className="task__button edit">EDIT</button>
        <button onClick={props.deleteTask} className="task__button delete">DEL</button>
    </div>
    
  )
}

export default Task