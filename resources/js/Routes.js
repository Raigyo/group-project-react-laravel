import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import CreateAccount from './components/create-account';
import Create from './components/create';
import DisplayAll from './components/display-all';
import DisplayEvent from './components/display-event';
import DisplayPast from './components/display-past';
import Edit from './components/edit';
import Login from './components/login';
import Logout from './components/logout';
import SubscriptionEvent from './components/subscription-event';
import UnsubscriptionEvent from './components/unsuscription-event';
import Home from './Home'

const Routes = () => (

    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/create-account' component={CreateAccount} />
      <Route exact path='/create-event' component={Create} />
      <Route exact path='/display-all' component={DisplayAll} />
      <Route exact path='/display-event' component={DisplayEvent} />
      <Route exact path='/display-past' component={DisplayPast} />
      <Route exact path='/edit' component={Edit} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/logout' component={Logout} />
      <Route exact path='/subscription-event' component={SubscriptionEvent} />
      <Route exact path='/unsuscription-event' component={UnsubscriptionEvent} />
    </Switch>
  
)

export default Routes
