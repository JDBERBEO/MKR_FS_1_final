import React from 'react'
import { Router, Switch } from 'react-router'
import { LogInComponent } from '../components/LogIn/LogInComponent'
import { MainPage } from '../components/MainPage/MainPage'
import { SignUpComponent } from '../components/SignUp/SignUpComponent'
import { PublicRouter } from './PublicRouter'

export const PublicRoutes = () => {
    return (
    <div>
    <Router>
        <Switch>
            <PublicRouter exact path="/signup" component={SignUpComponent} />
            <PublicRouter exact path="/login" component={LogInComponent} />
            <PublicRouter path="/" component={MainPage} />
        </Switch>
    </Router>
    </div>
    )
}
