import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import App from './App';
import PrivateRoutes from './auth/PrivateRoutes';
import EventPage from './components/EventPage';
import Loader from './components/Loader';
import ServerError from './components/ServerError';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Dashboard from './components/UserDashboard/Dashboard';
import Myevents from './components/UserDashboard/Myevents';
import Home from './core/Home';

const Routes = () => {
    return (
        <BrowserRouter>
        <Switch>
            <Route path='/' exact component={App}/>
            <Route path='/signin' exact component={Signin}/>
            <Route path='/signup' exact component={Signup}/>
            <Route path='/servererr' exact component={ServerError}/>
            <Route path='/post/:user' exact component={EventPage}/>
            <Route path='/loader' exact component={Loader}/>
            <PrivateRoutes path='/user/dashboard' exact component={Dashboard}/>
            <PrivateRoutes path='/user/dashboard/myevents' exact component={Myevents}/>
            
           

        </Switch>
        </BrowserRouter>
    );
}

export default Routes;
