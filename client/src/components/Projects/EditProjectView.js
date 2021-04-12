import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import { ProjectContext } from '../../context/ProjectContext'

export const EditProjectView = () => {

    const {editProjects, setEditProjects} = useContext(ProjectContext)
    console.log(editProjects)
    
    return (
        <div>
        <form>
            <div className="mb-3">
                <h1>EDIT PROJECT</h1>
                <label for="textform" className="form-label">Project Title</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="projectTitle" 
                // onChange={handleOnChange} value={value.title}
                />
            </div>
            <div className="mb-3">
                <label for="textform" className="form-label">Project Description</label>
                <input type="text" className="form-control" id="exampleInputPassword1" name="projectDescription" 
                // onChange={handleOnChange} value={value.description}
                />
            </div>
            <Link to="/editProjects" type="submit" className="btn btn-primary">Edit Project</Link>
           
        </form>
    </div>
    )
}
