import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import store from './redux/store';
import Routes from './Routes';

ReactDOM.render(

 <Provider store={store}>
   <Routes/>
 </Provider>,

  document.getElementById('root')
);
