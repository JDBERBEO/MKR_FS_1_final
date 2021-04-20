import React, {useEffect, useState, useContext } from 'react'
import axios from 'axios'
import { GetProjectsView } from './GetProjectsView'
import { Link, useHistory, useParams } from 'react-router-dom'
import { ProjectContext } from '../../context/ProjectContext'
import {AuthContext} from '../../context/AuthContext'




export const GetProjectsContainer = () => {
    const history = useHistory()
    const {projects} = useContext(ProjectContext)
    const {user} = useContext(AuthContext)
    const {id} = useParams()
    // const {editProjects, setEditProjects} = useContext(ProjectContext)
  
   console.log('projects: ', projects)

    const handleDelete = (id) => {
      
      axios.delete(`http://localhost:3002/projects/${id}`, {headers: {Authorization: user}})
      .then((response)=>{
        console.log(response)
        const deletedProject = projects.filter((project) => project._id !== id)
        // setProjects(deletedProject)
      })
      .catch((error) => {
          console.log(error)
          
      })

    }

    if(!projects) {
      return <h2>loading...</h2>
    }
    // const handleEdit = (id) => {
    //     history.push(`/projects/${id}`)
    // }

    return (<>
        <Link to='/createProject' className='nav nav-link'>Create Project</Link>
        {
          projects.map((project) => (
            <GetProjectsView
              key={project._id}
              project ={project}
              // handleEdit={handleEdit}
              // handleDelete={handleDelete}
            //   handleVotar={handleVotar}
            />))
        }
      </>
       
    )
}
