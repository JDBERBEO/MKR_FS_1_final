import React, {useContext} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
  import { MainPage} from '../components/MainPage'
  import {MainRoutes} from './MainRoutes'
  import {PrivateRoute} from './PrivateRoute'
import {AuthContext} from '../context/AuthContext'
import { PublicRouter } from './PublicRouter';
import { SignUpComponent } from '../components/SignUpComponent';
import { LogInComponent } from '../components/LogInComponent';
import { AppNav } from '../components/GlobalComponents/AppNav';
import { HomeNav } from '../components/GlobalComponents/HomeNav';
import { Home } from '../components/GlobalComponents/Home';
import { MasterPage } from '../components/GlobalComponents/MasterPage';
import { GetProjectsContainer } from '../components/Projects/GetProjectsContainer';



export const AppRouter = () => {

    const { user } = useContext(AuthContext)
    console.log('esto es user: ', user)
    return (<>
        {/* {user ? <AppNav /> : <HomeNav />} */}
    <Router>
        <Switch>
            <PrivateRoute path='/projects' isUserAuth={user} component={MainRoutes} />
            <PublicRouter exact path="/signup" isUserAuth={user} component={SignUpComponent} />
            <PublicRouter exact path="/login" isUserAuth={user} component={LogInComponent} />
            {/* <PublicRouter exact path="/" isUserAuth={user} component={MainPage} /> */}
            {user ? <PublicRouter
            path='/'
            component={GetProjectsContainer}
          /> :
            <PublicRouter
              path='/'
              component={MainPage}
            />}
        </Switch>
    </Router>
    </>
    )
}
