import React from 'react'

export const GetProjectsView = ({project, handleDelete, handleEdit}) => {


    return (
            
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{project.projectTitle}</h5>
                    <p className="card-text">{project.projectDescription}</p>
                    {/* click para abrir tareas */}
                    <button className="btn btn-danger" onClick={()=>handleDelete(project._id)}>Delete</button> 
                    <button className="btn btn-secondary" onClick={()=>handleEdit(project)}>Edit</button>
                </div>
            </div>
    )
}
