import React, {useEffect, useState, useContext } from 'react'
import axios from 'axios'
import { GetProjectsView } from './GetProjectsView'
import { Link, useHistory, useParams } from 'react-router-dom'
import { ProjectContext } from '../../context/ProjectContext'
import {AuthContext} from '../../context/AuthContext'
import { CreateProjectContainer } from './CreateProjectContainer'




export const GetProjectsContainer = () => {
    const history = useHistory()
    const {projects, deleteProject} = useContext(ProjectContext)
    const {user} = useContext(AuthContext)
    const {id} = useParams()
    // const {editProjects, setEditProjects} = useContext(ProjectContext)
  
   console.log('projects: ', projects)


    const handleDelete = (id) => {
      deleteProject(id)
	}

    if(!projects) {
      return <h2>loading...</h2>
    }
    // const handleEdit = (id) => {
    //     history.push(`/projects/${id}`)
    // }

    return (<>
        <div className="container">
          <div className="row justify-content-center">
              <div className="col-5">
                <CreateProjectContainer />
              </div>
          </div>
        </div>
        <div className="row justify-content-center">
        <div>

          <h2>Enlisted Projects</h2>
        </div>
        </div>
        {
          projects.map((project) => (
            <GetProjectsView
              key={project._id}
              project ={project}
              // handleEdit={handleEdit}
              handleDelete={handleDelete}

            />))
        }
      </>
       
    )
}
