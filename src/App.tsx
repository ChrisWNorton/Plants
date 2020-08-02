import React from 'react';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import  NavigationBar from './components/NavigationBar';

const App = () => (
  <NavigationBar></NavigationBar>
);

export default withAuthenticator(App);
