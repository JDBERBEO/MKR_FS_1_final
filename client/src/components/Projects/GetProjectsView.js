import React from 'react'
import { CreateProjectContainer } from './CreateProjectContainer'

export const GetProjectsView = ({project, handleDelete, handleEdit, handleCreateTask, handleShowTasks}) => {
    console.log('project._id: ', project._id)

    return (<>
        <div className="container">
            <div className="row justify-content-center align-items-start">
                <div className="col-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{project.projectTitle}</h5>
                            <p className="card-text">{project.projectDescription}</p>
                            {/* click para abrir tareas */}
                            <button className="btn btn-danger" onClick={()=>handleDelete(project._id)}>Delete</button> 
                            <button className="btn btn-secondary" onClick={()=>handleEdit(project._id)}>Edit</button>
                            <button onClick={() => handleCreateTask(project._id)} className="btn btn-outline-secondary btn-sm "type="button" title="Crate">
						        create Task
					        </button>
                            <button onClick={() => handleShowTasks(project._id)} className="btn btn-outline-secondary btn-sm "type="button" title="get">
						        show Tasks
					        </button>
                        </div>
                    </div>                 
                </div>
            </div>
        </div>
    </>
    )
}
