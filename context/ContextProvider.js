import { createContext, useContext, useState } from "react"
import uuid from 'react-uuid';

const ContextData = createContext()

export function useContextData(){
    return useContext(ContextData)
}

const ContextProvider = ({children}) => {

const[tasks,setTasks]=useState([{task:"Ir al supermercado",id:"id1",state:false},{task:"Ir al supermercado",id:"id2",state:false}])

const addTask = (e) =>{
  let inputField = e.target.parentElement.firstChild.value
  if(!inputField){
    console.log("Escribir tarea")
  }else{
    setTasks([...tasks,{task:inputField,id:uuid(),state:false}])
    e.target.parentElement.firstChild.value=""
  }
}

const deleteTask = (e) =>{
  let selectedTaskId = e.target.parentElement.id
  setTasks([...tasks.filter(task=>task.id!==selectedTaskId)])
}

const editTask = (e) =>{
  let selectedTaskId = e.target.parentElement.id
  let selectedTaskField = e.target.parentElement.firstChild.nextSibling
  if(selectedTaskField.disabled===true){
    selectedTaskField.disabled=false
    e.target.style.backgroundColor = "rgb(145, 114, 29)"
  }else{
    setTasks([...tasks.map(task=>{if (task.id===selectedTaskId){task.task=selectedTaskField.value}return task})])
    selectedTaskField.disabled=true
    e.target.style.backgroundColor = "rgb(68, 81, 121)"
  }
}

const handleCheck = (e) =>{
  let selectedTaskId = e.target.parentElement.id 
  if(e.target.checked){
    setTasks([...tasks.map(task=>{if (task.id===selectedTaskId){task.state=true}return task})])
  }else{
    setTasks([...tasks.map(task=>{if (task.id===selectedTaskId){task.state=false}return task})])
  }
}

  return (
    <ContextData.Provider value={{tasks:tasks,addTask:addTask,deleteTask:deleteTask,editTask:editTask,handleCheck:handleCheck}}>
    {children}
    </ContextData.Provider>
  )
}

export default ContextProvider