import React from 'react'
import { Link } from 'react-router-dom'

export const CreateProjectView = ({handleOnChange, value, handleOnClick}) => {
    return (
        <div>
            <form>
                <div className="mb-3">
                    <h1>CREATE PROJECT</h1>
                    <label for="textform" className="form-label">Project Title</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="projectTitle" onChange={handleOnChange} value={value.title}/>
                </div>
                <div className="mb-3">
                    <label for="textform" className="form-label">Project Description</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" name="projectDescription" onChange={handleOnChange} value={value.description}/>
                </div>
                <Link type="submit" className="btn btn-dark" onClick={handleOnClick}>Create Project</Link>
               
            </form>
        </div>
    )
}
