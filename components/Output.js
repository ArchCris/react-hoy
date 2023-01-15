
import Task from "../components/Task"
import { useContextData } from "../context/ContextProvider"





const Output = () => {

  const {tasks,deleteTask,editTask,handleCheck} = useContextData()

  return (
    <div className='output'>
      
      <div className="output__inner">
      {tasks.length>0?
      <>
      {tasks.map(unitask=>{
        return(
          <Task key={unitask.id} id={unitask.id} hour={unitask.hour} task={unitask.task} state={unitask.state} deleteTask={deleteTask} editTask={editTask} handleCheck={handleCheck}></Task>
              )
      })}
      </>
      :<div className="output__waitingTask">
        <p className="output__waitingTask-title">Waiting for tasks...</p>
        <svg className="output__waitingTask-pencil" fill="white" viewBox="-6.5 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.28 10.32c0-0.24-0.080-0.44-0.24-0.6l-3.12-3.12c-0.32-0.32-0.84-0.32-1.2 0l-2.36 2.36-11.32 11.36c-0.12 0.12-0.2 0.28-0.24 0.44l-0.8 3.92c-0.040 0.28 0.040 0.56 0.24 0.76 0.16 0.16 0.36 0.24 0.6 0.24 0.040 0 0.12 0 0.16 0l3.92-0.8c0.16-0.040 0.32-0.12 0.44-0.24l13.68-13.68c0.16-0.2 0.24-0.4 0.24-0.64zM4.32 23.24l-2.44 0.48 0.52-2.4 10.56-10.56 1.92 1.92-10.56 10.56zM16.080 11.52l-1.92-1.92 1.2-1.2 1.92 1.92-1.2 1.2z"></path>
        </svg>
      </div>}
      </div>
    </div>
  )
}

export default Output