import React from 'react';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import  NavigationBar from './components/NavigationBar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './pages/About';
import Calendar from './pages/Calendar';
import Plants from './pages/Plants';

import 'bootstrap/dist/css/bootstrap.min.css'


const App = () => {
 return (
   <div className = "App">
  <Router>
    <Route path = "/" component = {NavigationBar}></Route>
    <Route path = "/about" component = {About}></Route>
    <Route path = "/calendar" component = {Calendar}></Route>
    <Route path = "/plants" component = {Plants}></Route>
  </Router>
  </div>
)
 };

export default App;
