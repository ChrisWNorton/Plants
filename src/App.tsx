import React from 'react';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import About from './pages/About';
import Calendar from './pages/Calendar';
import Plants from './pages/Plants';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <div className="App">
    <Router>
      <Route path="/" component={NavigationBar} />
      <Route path="/about" component={About} />
      <Route path="/calendar" component={Calendar} />
      <Route path="/plants" component={Plants} />
    </Router>
  </div>
);

export default App;
