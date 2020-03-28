import React from 'react'

import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Private from './Routes/Private'

import Logon from './pages/Logon'
import Register from './pages/Register'
import Profile from './pages/Profile'
import NewIncident from './pages/NewIncident'

const Routes: React.FC  = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Logon}/>
        <Route path="/register" component={Register}/>
        <Private path="/profile" component={Profile} />
        <Private path="/incidents/new" component={NewIncident} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
