import React, { Component } from 'react';
import './App.css';

//import LoginModal from './components/LoginModal';
import SignUpModal from './components/SignUpModal';
//import UserTypeSelection from './components/UserTypeSelection';
//import Registration from './components/Registration';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SignUpModal />
      </div>
    );
  }
}

export default App;
