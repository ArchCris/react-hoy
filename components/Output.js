
import Task from "../components/Task"
import { useContextData } from "../context/ContextProvider"
import uuid from 'react-uuid';




const Output = () => {

  const {tasks,deleteTask,editTask,handleCheck} = useContextData()

  return (
    <div className='output'>
      {tasks.map(task=>{
        return(
          <Task key={uuid()} id={task.id} task={task.task} state={task.state} deleteTask={deleteTask} editTask={editTask} handleCheck={handleCheck}></Task>
        )
      })}
    </div>
  )
}

export default Output