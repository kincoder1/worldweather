import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';

import store from './redux/store';
import App from './App/App';


const routes = (<Provider store={store}><App/></Provider>);
const rt = document.getElementById('root');
render(routes, rt);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
