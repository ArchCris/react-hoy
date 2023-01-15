import { createContext, useContext, useState, useEffect } from "react"
import uuid from 'react-uuid';

const ContextData = createContext()

export function useContextData(){
    return useContext(ContextData)
}

const ContextProvider = ({children}) => {

const[tasks,setTasks]=useState([])
const[stats,setStats]=useState({addedTasks:0,editedTasks:0,deletedTasks:0})

useEffect(()=>{
  const recoveredData = window.localStorage.getItem("myTasks")
  const objectData = JSON.parse(recoveredData)
  if(objectData.length>=1){
    setTasks(objectData)
  }
},[])

useEffect(()=>{
  if(tasks.length>=0){
    window.localStorage.setItem("myTasks",JSON.stringify(tasks))
  }
},[tasks])

let displayHour = 0
let displayMinutes = 0
let objectDate = new Date()
let hour = objectDate.getHours()
let minutes = objectDate.getMinutes() 
if(hour.toString().length==1){
  displayHour = "0" + hour
}else{
  displayHour=hour
}
if(minutes.toString().length==1){
  displayMinutes = "0" + minutes
}else{
  displayMinutes=minutes
}
let formatedHour = displayHour + ":" + displayMinutes

const addTask = (e) =>{
  let inputField = e.target.parentElement.firstChild.value
  if(!inputField){
    console.log("Escribir tarea")
  }else{
    setTasks([...tasks,{task:inputField,id:uuid(),state:false,hour:formatedHour}])
    setStats({...stats,addedTasks:stats.addedTasks+1})
    e.target.parentElement.firstChild.focus()
    e.target.parentElement.firstChild.value=""
  }
}

const deleteTask = (e) =>{
  let selectedTaskId = e.target.parentElement.id
  setTasks([...tasks.filter(task=>task.id!==selectedTaskId)])
  setStats({...stats,deletedTasks:stats.deletedTasks+1})
}

const editTask = (e) =>{
  let selectedTaskId = e.target.parentElement.id
  let selectedTaskField = e.target.parentElement.firstChild.nextSibling.nextSibling
  if(selectedTaskField.disabled===true){
    selectedTaskField.disabled=false
    e.target.style.backgroundColor = "rgb(145, 114, 29)"
  }else{
    setTasks([...tasks.map(task=>{if (task.id===selectedTaskId){task.task=selectedTaskField.value}return task})])
    setStats({...stats,editedTasks:stats.editedTasks+1})
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

const resetApp = () => {
  setTasks([])
}

  return (
    <ContextData.Provider value={{stats:stats,tasks:tasks,addTask:addTask,deleteTask:deleteTask,editTask:editTask,handleCheck:handleCheck,resetApp:resetApp}}>
    {children}
    </ContextData.Provider>
  )
}

export default ContextProvider