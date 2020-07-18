import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import DashboardPage from '../components/DashboardPage';
import Dashboard360 from '../components/Dashboard360';
import AddUserPage from '../components/AddUserPage';
import AddTeammatePage from '../components/AddTeammatePage';
import EditUserPage from '../components/EditUserPage';
import EditTeammatePage from '../components/EditTeammatePage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/dashboard" component={DashboardPage} />
        <PrivateRoute path="/dashboard360" component={Dashboard360} />
        <PrivateRoute path="/createuser" component={AddUserPage} />
        <PrivateRoute path="/edituser/:id" component={EditUserPage} />
        <PrivateRoute path="/editteammate/:id/:id" component={EditTeammatePage} />
        <PrivateRoute path="/createteammate/:id" component={AddTeammatePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
