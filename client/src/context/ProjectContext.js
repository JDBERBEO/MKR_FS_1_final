import React, { createContext, useState} from 'react'

export const ProjectContext = ({children}) => {
    console.log('render contex')
    const [editProjects, setEditProjects] = useState({})
    const contextValue = {
        editProjects, setEditProjects
    }
    
    return (
        <ProjectContext.Provider value={contextValue}>
        {children}
      </ProjectContext.Provider>
    )
}
