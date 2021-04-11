import React from 'react'

export const GetProjectsView = ({project}) => {


    return (
            
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{project.projectTitle}</h5>
                    <p className="card-text">{project.projectDescription}</p>
                    {/* click para abrir tareas */}
                    <a href="#" className="btn btn-primary">Go somewhere</a> 
                </div>
            </div>
    )
}
