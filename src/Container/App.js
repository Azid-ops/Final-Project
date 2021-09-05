import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import AdminComponent from '../Admin/Components/AdminComponent';

import Aux from '../HOC/Auxiliary';
import Indexpage from '../Index/Pages/indexPage';
import UserSignupComponent from '../User/Components/UserSignupComponent';
import UserLogin from '../User/Pages/UserLogin';

const App = () => {
  return (
    <Aux>
      <BrowserRouter>
        <Switch>
          <Route path = "/" exact>
            <Indexpage />
          </Route>

          <Route path = "/admin" exact>
            <AdminComponent />
          </Route>

          <Route path = "/user" exact>
            <UserLogin />
          </Route>

          <Route path = "/userSignup" exact>
            <UserSignupComponent />
          </Route>
          
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </Aux>
  );
}

export default App;
