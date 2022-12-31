import React from 'react'
import { useContextData } from "../context/ContextProvider"



const Input = () => {
  const {addTask} = useContextData()
  return (
    <div className='input'>
        <input type="text" className="input__input" />
        <button onClick={addTask} className="input__button add">ADD</button>
    </div>
  )
}

export default Input