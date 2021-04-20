import React, {useState, useEffect, useContext} from 'react'
import { ProjectContext } from './ProjectContext'
import axios from 'axios'
import { AuthContext } from './AuthContext'


export const ProjectContextProvider = ({children}) => {
    console.log('render contex')
    const [projects, setProjects] = useState()
    const {user} = useContext(AuthContext)
    

    console.log('user from project context: ', user)
    useEffect(() => {
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

    }, [])
    
    return (
        <ProjectContext.Provider value={{projects}}>
        {children}
      </ProjectContext.Provider>
    )
}

