import React, {useState, useContext} from 'react'
import axios from 'axios'
import { AuthContext } from './AuthContext'
import { TaskContext } from './TaskContext'

export const TaskContextProvider = ({children}) => {
    const [tasksState, setTasksState] = useState()
    const {user} = useContext(AuthContext)

    const createTask = (projectId, task) => {
        console.log('projectID y task desde context: ', projectId, task)
        axios.post('http://localhost:3002/tasks', {
            projectId, 
            task
        },{
            headers: {
                Authorization: user
            }},
            ).then(response => {
                console.log(response)
                setTasksState(response.data)
            }).catch(err => console.log(err => console.log(err)))
    }

    const getTasks = (projectId) => {
        console.log('desde getTasks', user)
        axios.get(`http://localhost:3002/tasks?projectId=${projectId}`,{
            headers: {
                Authorization: user
            }
        }).then(response => {
            console.log(response.data)
            setTasksState(response.data)
        }).catch(err => console.log(err))
    }
    return (
        <TaskContext.Provider value={{ createTask, tasksState, getTasks }}>
        {children}
    </TaskContext.Provider>
    )
}
