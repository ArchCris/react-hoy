
import Task from "../components/Task"
import { useContextData } from "../context/ContextProvider"





const Output = () => {

  const {tasks,deleteTask,editTask,handleCheck} = useContextData()

  return (
    <div className='output'>
      <div className="output__inner">
      {tasks.map(unitask=>{
        return(
          <Task key={unitask.id} id={unitask.id} hour={unitask.hour} task={unitask.task} state={unitask.state} deleteTask={deleteTask} editTask={editTask} handleCheck={handleCheck}></Task>
              )
      })}
      </div>
    </div>
  )
}

export default Output