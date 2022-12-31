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
  if(selectedTaskField.disabled==true){
    selectedTaskField.disabled=false
    
    e.target.style.backgroundColor = "rgb(145, 114, 29)"
  }else{
    setTasks([...tasks.filter(task=>task.id!==selectedTaskId),{task:selectedTaskField.value,id:selectedTaskId,state:false}])
  }
}

const handleCheck = (e) =>{
  if(e.target.checked){
    let selectedTaskId = e.target.parentElement.id
    let selectedTask = tasks.filter(task=>task.id==selectedTaskId)[0]
    setTasks([...tasks.filter(task=>task.id!==selectedTaskId),{task:selectedTask.task,id:selectedTask.id,state:true}])
  }else{
    let selectedTaskId = e.target.parentElement.id
    let selectedTask = tasks.filter(task=>task.id===selectedTaskId)[0]
    setTasks([...tasks.filter(task=>task.id!==selectedTaskId),{task:selectedTask.task,id:selectedTask.id,state:false}])
  }
}

  return (
    <ContextData.Provider value={{tasks:tasks,addTask:addTask,deleteTask:deleteTask,editTask:editTask,handleCheck:handleCheck}}>
    {children}
    </ContextData.Provider>
  )
}

export default ContextProvider