import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { GetProjectsContainer } from '../components/Projects/GetProjectsContainer'
import { EditProjectView } from '../components/Projects/EditProjectView'


export const MainRoutes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/projects" component={GetProjectsContainer} />
        <Route path="/projects/:id" component={EditProjectView} />
      </Switch>
    </>
  )
}
