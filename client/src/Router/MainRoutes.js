import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { LogInComponent } from '../components/LogIn/LogInComponent'
import { GetProjectsContainer } from '../components/Projects/GetProjectsContainer'
import { SignUpComponent } from '../components/SignUp/SignUpComponent'
import { MainPage} from '../components/MainPage/MainPage'
import { CreateProjectContainer } from '../components/Projects/CreateProjectContainer'
import { EditProjectView } from '../components/Projects/EditProjectView'


export const MainRoutes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/projects" component={GetProjectsContainer} />
        <Route path="/createProject" component={CreateProjectContainer} />
        <Route path="/editProjects" component={EditProjectView} />
      </Switch>
    </>
  )
}
