import React, {useEffect, useState} from 'react'
import axios from 'axios'


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

    return (
        <div className="card">
                
                <div className="card-body">
                    <h5 className="card-title">Project Title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
    )
}
