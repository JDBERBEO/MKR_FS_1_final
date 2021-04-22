import React, {useContext, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import { ProjectContext } from '../../context/ProjectContext'
import { TaskContext } from '../../context/TaskContext'

export const TaskView = () => {
    const {getTasks, tasksState} = useContext(TaskContext)
    const { id } = useParams()

    useEffect(() => {
        getTasks(id)
    },[])

    if (!tasksState) return <h2>Loading ...</h2>
   
    return (
        <div>
            <h1>Project's Tasks</h1>
           {tasksState.map(tarea => 
     
           <p>{tarea.task}</p>
           )}
        </div>
    )
}
