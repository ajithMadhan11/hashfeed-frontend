import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import App from './App';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Home from './core/Home';

const Routes = () => {
    return (
        <BrowserRouter>
        <Switch>
            <Route path='/' exact component={App}/>
            <Route path='/signin' exact component={Signin}/>
            <Route path='/signup' exact component={Signup}/>
        </Switch>
        </BrowserRouter>
    );
}

export default Routes;
