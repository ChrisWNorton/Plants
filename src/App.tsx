import React from 'react';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import  NavigationBar from './components/NavigationBar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'


const App = () => {
 return (
   <div className = "App">
  <Router>
    <Route path = "/" >
      <NavigationBar></NavigationBar>
    </Route>
    <Route path = "/about">
        <div>
          about
        </div>
    </Route>
    <Route path = "/calendar">
        <div>
          schedule
        </div>
    </Route>
    <Route path = "/plants">
        <div>
          plants
        </div>
    </Route>
  
  
  </Router>
  </div>
)
 };

export default App;
