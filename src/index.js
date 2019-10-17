import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {Route, BrowserRouter as Router } from 'react-router-dom';
import LoginComponent from './login/login';
import SignupComponent from './signup/signup';
import DashboardComponent from './dashboard/dashboard';

const firebase = require("firebase");
require("firebase/firestore");

firebase.initializeApp({
    apiKey: "AIzaSyCZpHc4U5B3pYNnwMyb0DUrusj4i6gcHMw",
    authDomain: "chatapp-c9bbd.firebaseapp.com",
    databaseURL: "https://chatapp-c9bbd.firebaseio.com",
    projectId: "chatapp-c9bbd",
    storageBucket: "chatapp-c9bbd.appspot.com",
    messagingSenderId: "1003431612097",
    appId: "1:1003431612097:web:8008c503fcb4efe35c8e40",
    measurementId: "G-GYPBQ0EGG7"
});

const routing = (
    <Router>
        <div id='routing-container'>
            <Route path='/login' component={LoginComponent}></Route>
            <Route path='/signup' component={SignupComponent}></Route>
            <Route path='/dashboard' component={DashboardComponent}></Route>
        </div>
    </Router>
)

ReactDOM.render(routing , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
