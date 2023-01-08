import { useEffect } from "react"
import { useContextData } from "../context/ContextProvider"

const StatusBar = () => {

    const {tasks,stats} = useContextData()

    const handleTaskStatus = () =>{
        let readyTasks = 0
     tasks.map(task=>{if(task.state===true){readyTasks++}})
     return readyTasks
    }

    useEffect(() => {
        handleTaskStatus()
    }, [tasks]);

  return (
    <div className='statusBar'>
        <div className='statusBar__inner'>
            <div className='statusBar__section'><p>Added tasks</p>{stats.addedTasks}</div>
            <div className='statusBar__section'><p>Deleted tasks</p>{stats.deletedTasks}</div>
            <div className='statusBar__section'><p>Edited tasks</p>{stats.editedTasks}</div>
            <div className='statusBar__section'><p>Ready tasks</p>{handleTaskStatus()}  of  {tasks.length}</div>
        </div>
    </div>
  )
}

export default StatusBar