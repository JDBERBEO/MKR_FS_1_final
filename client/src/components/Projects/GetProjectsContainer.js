import React, {useEffect, useState, useContext } from 'react'
import { GetProjectsView } from './GetProjectsView'
import { Link, useHistory, useParams } from 'react-router-dom'
import { ProjectContext } from '../../context/ProjectContext'
import {AuthContext} from '../../context/AuthContext'
import { CreateProjectContainer } from './CreateProjectContainer'
import './GetProjects.css'




export const GetProjectsContainer = () => {
    const history = useHistory()
    const {projects, deleteProject} = useContext(ProjectContext)
    const {user} = useContext(AuthContext)
    const {id} = useParams()
  
   console.log('projects: ', projects)


    const handleDelete = (id) => {
      deleteProject(id)
	}

    if(!projects) {
      return <h2>loading...</h2>
    }
    const handleEdit = (id) => {
        history.push(`/projects/${id}`)
    }

    return (<>
        <div className="container-createproject-form">
          <div className="row justify-content-center">
              <div className="col-5">
                <CreateProjectContainer />
              </div>
          </div>
        </div>
        <div className="row justify-content-center" id="enlistedprojects">
        <div className="col-7">

          <h2 className="enlisted-title">All Projects</h2>
        </div>
        {
          projects.map((project) => (
            <GetProjectsView
            key={project._id}
            project ={project}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            
            />))
          }
        </div>
      </>
       
    )
}
