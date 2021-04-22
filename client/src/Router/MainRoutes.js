import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { GetProjectsContainer } from '../components/Projects/GetProjectsContainer'
import { EditProjectView } from '../components/Projects/EditProjectView'
import { TaskContextProvider } from '../context/TaskContextProvider'
import { TaskContainer } from '../components/Tasks/TaskContainer'
import { TaskView } from '../components/Tasks/TaskView'


export const MainRoutes = () => {
  return (
    <>
    <TaskContextProvider>
      <Switch>
        <Route exact path={`/projects/:id/tasks/create`} component={TaskContainer} />
        <Route exact path={`/projects/:id/tasks`} component={TaskView} />
        <Route exact path="/projects" component={GetProjectsContainer} />
        <Route path="/projects/:id" component={EditProjectView} />
      </Switch>
    </TaskContextProvider>
    </>
  )
}
