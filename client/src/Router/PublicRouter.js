import React from 'react'
import { Route, Redirect } from 'react-router-dom';

export const PublicRouter = ({
    isUserAuth,
    component: Component,
    ...rest
  }) => {
    return (
      <Route {...rest}
        component={(props) => (
          (!isUserAuth) ? (<Component {...props} />) : (<Redirect to="/" />) 
        )}
      />
    )
  }