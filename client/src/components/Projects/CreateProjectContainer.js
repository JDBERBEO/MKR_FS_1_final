import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { CreateProjectContainerView } from './CreateProjectContainerView'

export const CreateProjectContainer = ({history}) => {
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
        
        // fetchProjects()
       
        const authorizationToken = localStorage.getItem('token');
        // console.log(authorizationToken)
    
        axios.post('http://localhost:3002/projects', state, {headers: {authorization: authorizationToken }})
        .then((response) => {
            console.log(response);
        },
        ).catch((error) => {
            console.log(error)
        })

        history.replace('/projects')

    }



    return (
        <div>
            <CreateProjectContainerView 
            handleOnChange={handleOnChange}
            handleOnClick={handleOnClick}
            value={state}
            />
        </div>
    )
}
