import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { GetProjectsView } from './GetProjectsView'
import { Link } from 'react-router-dom'


export const GetProjectsContainer = () => {
    
    const [projects, setProjects] = useState()

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

    return (<>
        <Link to='/createProject' className='nav nav-link'>Create Project</Link>
        {
          projects.map((project) => (
            <GetProjectsView
              key={project._id}
              project ={project}
            //   handleEdit={handleEdit}
            //   handleDelete={handleDelete}
            //   handleVotar={handleVotar}
            />))
        }
      </>
       
    )
}
