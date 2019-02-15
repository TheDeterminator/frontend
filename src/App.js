import React, { Component } from 'react';
import './App.css';

import {Route} from 'react-router-dom';

//import LoginModal from './components/LoginModal';
//import SignUpModal from './components/SignUpModal';
//import UserTypeSelection from './components/UserTypeSelection';
//import ListviewComponent from './components/ListviewComponent';
//import GridviewComponent from './components/GridviewComponent';
import Header from './components/Header';
import RegistrationPage from './views/RegistrationPage'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Route exact path='/register' component={RegistrationPage}/>
      </div>
    );
  }
}

export default App;
