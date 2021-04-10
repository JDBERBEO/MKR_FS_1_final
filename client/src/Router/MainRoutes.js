import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { LogInComponent } from '../components/LogInComponent'
import { GetProjectsContainer } from '../components/Projects/GetProjectsContainer'
import { SignUpComponent } from '../components/SignUpComponent'
import { MainPage} from '../components/MainPage'



export const MainRoutes = () => {
  return (
    <>
      <Switch>
        <Route path="/signup" component={SignUpComponent} />
        <Route path="/login" component={LogInComponent} />
        <Route path="/projects" component={GetProjectsContainer} />
        <Route path="/"     component={MainPage} />
      </Switch>
    </>
  )
}
