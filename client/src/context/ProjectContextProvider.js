import React, {useState, useEffect, useContext} from 'react'
import { ProjectContext } from './ProjectContext'
import axios from 'axios'
import { AuthContext } from './AuthContext'


export const ProjectContextProvider = ({children}) => {
    console.log('render contex')
    const [projects, setProjects] = useState()
    const {user} = useContext(AuthContext)
    

    console.log('user from project context: ', user)

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
        if (user) {
    
          axios.delete(`/projects/${id}`,
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
        <ProjectContext.Provider value={{projects}}>
        {children}
      </ProjectContext.Provider>
    )
}

