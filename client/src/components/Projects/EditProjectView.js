import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import { ProjectContext } from '../../context/ProjectContext'
import { CreateProjectContainer } from './CreateProjectContainer'

export const EditProjectView = () => {
    
    return (
        <div>
            <h1>EditProject</h1>
            <CreateProjectContainer />
        </div>
    )
}
