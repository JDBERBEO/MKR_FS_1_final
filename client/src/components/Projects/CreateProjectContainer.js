import React, {useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { CreateProjectView } from './CreateProjectView'
import { ProjectContext } from '../../context/ProjectContext'
import { useHistory, useParams } from 'react-router'

export const CreateProjectContainer = () => {
    const {projects, createProject, editProject } = useContext(ProjectContext)
    
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
        if (id) {
			console.log('edit project')
			console.log('id desde edit: ', id)
            
			editProject(id, state.projectTitle, state.projectDescription)
            console.log('state.projectTitle, state.projectDescription: ', state.projectTitle, state.projectDescription)
			history.push('/projects');
		}else{

            createProject(state.projectTitle, state.projectDescription)
        }
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
