import React, {useState, useContext} from 'react'
import { useHistory, useParams } from 'react-router'
import { TaskContext } from '../../context/TaskContext'
import { CreateTaskForm } from './CreateTaskForm'


export const TaskContainer = () => {

    const [task, setTask] = useState('')
    const {createTask} = useContext(TaskContext)
    const { id } = useParams()
    const history = useHistory()

    const handleChange = (e) => {
        setTask(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        createTask(id, task)
        history.push('/projects')
    }

    const handleCancel = () => {
        history.push('/projects')
    }

    return (
        <div>
            <CreateTaskForm
            handleCancel={handleCancel}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            task={task}
            />
        </div>
    )
}
