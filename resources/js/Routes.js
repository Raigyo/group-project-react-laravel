import React from 'react'
import { BrowserRouter } from 'react-router-dom'
//import App from './App';

const Routes = () => (
  <Switch>
      {/*<Route path='/' component={ App } />*/}
      <Route path='/' component={ Home } />
      <Route path='/create-account' component={ CreateAccount } />
      <Route path='/create' component={ Create } />
      <Route path='/display-all' component={ DisplayAll } />
      <Route path='/display-event' component={ DisplayEvent } />
      <Route path='/display-past' component={ DisplayPast } />
      <Route path='/edit' component={ Edit } />
      <Route path='/login' component={ Login } />
      <Route path='/logout' component={ Logout } />
      <Route path='/subscription-event' component={ SubscriptionEvent } />
      <Route path='/unsubscription-event' component={ UnsubscriptionEvent } />

  </Switch>
)

export default Routes
