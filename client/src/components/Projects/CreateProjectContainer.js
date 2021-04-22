import React, {useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { CreateProjectView } from './CreateProjectView'
import { ProjectContext } from '../../context/ProjectContext'
import { useHistory, useParams } from 'react-router'

export const CreateProjectContainer = () => {
    const {projects, createProject} = useContext(ProjectContext)
    
    const { id } = useParams()
    const history = useHistory()
    
    const initialState = {projectTitle: '', projectDescription: ''}
    const [state, setstate] = useState(initialState)

    const handleOnChange =(e)=>{
        const{name,value}=e.target
        setstate({...state,[name]:value})
    }
    console.log(state)    

    // const fetchProjects = async () =>{
    //     const authorizationToken = localStorage.getItem('token');
    //     await axios.post('http://localhost:3002/projects', {headers: {authorization: authorizationToken}, state})
    // }


    const handleOnClick = (e) => {
        e.preventDefault()
        console.log('state.projectTitle, state.projectDescription: ', state.projectTitle, state.projectDescription)
        createProject(state.projectTitle, state.projectDescription)
    }



    return (
        <div>
            <CreateProjectView 
            handleOnChange={handleOnChange}
            handleOnClick={handleOnClick}
            value={state}
            />
        </div>
    )
}
