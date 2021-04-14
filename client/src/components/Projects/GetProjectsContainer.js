import React, {useEffect, useState, useContext } from 'react'
import axios from 'axios'
import { GetProjectsView } from './GetProjectsView'
import { Link } from 'react-router-dom'
import { ProjectContext } from '../../context/ProjectContext'




export const GetProjectsContainer = ({history}) => {
    
    const [projects, setProjects] = useState()
    // const {editProjects, setEditProjects} = useContext(ProjectContext)
  
    const fetchProjects = async () => {
        let authorizationToken = localStorage.getItem('token');
        const { data } = await axios.get('http://localhost:3002/projects/', 
        {headers: {authorization: authorizationToken}})
        
        setProjects(data)
        console.log(data)
        
      }

    useEffect(() => {
        
        fetchProjects()
    }, []);

    if (!projects) return <div>Loading...</div>

    const handleDelete = (id) => {
      let authorizationToken = localStorage.getItem('token');
      axios.delete(`http://localhost:3002/projects/${id}`, {headers: {authorization: authorizationToken}})
      .then((response)=>{
        console.log(response)
        const deletedProject = projects.filter((project) => project._id !== id)
        setProjects(deletedProject)
      })
      .catch((error) => {
          console.log(error)
          
      })

    }

    // const handleEdit = (project) => {
    //   setEditProjects(project)
    // }

    return (<>
        <Link to='/createProject' className='nav nav-link'>Create Project</Link>
        {
          projects.map((project) => (
            <GetProjectsView
              key={project._id}
              project ={project}
              // handleEdit={handleEdit}
              handleDelete={handleDelete}
            //   handleVotar={handleVotar}
            />))
        }
      </>
       
    )
}
