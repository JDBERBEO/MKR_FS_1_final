import React, {useState, useEffect, useContext} from 'react'
import { ProjectContext } from './ProjectContext'
import axios from 'axios'
import { AuthContext } from './AuthContext'


export const ProjectContextProvider = ({children}) => {
    console.log('render contex')
    const [projects, setProjects] = useState()
    const {user} = useContext(AuthContext)
    

    console.log('user from project context: ', user)

    const createProject = (projectTitle, projectDescription) => {
        if (user) {
          axios.post('http://localhost:3002/projects',
            {
              projectTitle,
              projectDescription
            },
            {
              headers: {
                Authorization: user
              }
            })
            .then(({ data }) => {
              setProjects([data, ...projects])
            })
            .catch(error => {
              console.log(error.response)
            })
        }
    
      }

    const editProject = (id, projectTitle, projectDescription) => {
        if (user) {
    //optimistic Update
          const newProjects = projects.map((project) => {
            if (project._id === id) {
              return {
                ...project,
                projectTitle,
                projectDescription
              }
            } else {
              return project
            }
          });
          setProjects(newProjects)
    
          axios.put(`http://localhost:3002/projects/${id}`,
            {
              projectTitle,
              projectDescription
            },
            {
              headers: {
                Authorization: user
              }
            })
            .then(({ status }) => {
              if (status === 200) {
    
                const newProjects = projects.map((project) => {
    
                  if (project._id === id) {
                    console.log('enter here')
                    console.log(project)
                    return {
                      ...project,
                      projectTitle,
                      projectDescription
                    }
                  } else {
                    console.log('no es el projecto')
                    return project
                  }
    
    
                });
                setProjects(newProjects)
              }
    
            })
            .catch(error => {
              console.log(error.response)
              if(error){
                getProjects()
              }
            })
        }
      }

    const getProjects = ()=> {
            axios.get('http://localhost:3002/projects', {
                headers: {
                    Authorization: user
                }
               
            })
            .then((response) => {
                console.log('response', response)
                    setProjects(response.data)  
            })
            .catch(error => {
                console.log(error)
            })
    }

    const deleteProject = (id) => {
        console.log('id desde projectcontext: ', id)
        if (user) {
        console.log('user desde PC: ', user)
          axios.delete(`http://localhost:3002/projects/${id}`,
            {
              headers: {
                Authorization: user
              }
            })
            .then(({ status }) => {
              if (status === 200) {
                const newProjects = projects.filter((project) => project._id !== id)
                setProjects(newProjects)
              }
            })
            .catch(error => {
              if(error){
                getProjects()
              }
            })
        }
    }



    useEffect(() => {
        if (user) {
          getProjects()
        }
      }, [user]);
    
    
    return (
        <ProjectContext.Provider value={{projects, createProject, deleteProject, editProject}}>
        {children}
      </ProjectContext.Provider>
    )
}

