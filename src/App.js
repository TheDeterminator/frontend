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
import LoginModal from './components/LoginModal';
import CoordinatorHome from './views/CoordiantorHome';
import DonorHome from './views/DonorHome';
import StoryViewDonor from './components/StoryViewDonor';
import StoryViewCoordinator from './components/StoryViewCoordinator';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Route exact path='/register' component={RegistrationPage}/>
        <Route exact path='/login' component={LoginModal} />
        <Route exact path='/home/coordinator' component={CoordinatorHome} />
        <Route exact path='/home/donor' component={DonorHome} />
        <Route exact path='/home/donor/story/:id' component={StoryViewDonor} />
        <Route exact path='/home/coordinator/story/:id' component={StoryViewCoordinator} />
      </div>
    );
  }
}

export default App;
