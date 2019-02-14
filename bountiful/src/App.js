import React, { Component } from 'react';
import './App.css';

//import LoginModal from './components/LoginModal';
//import SignUpModal from './components/SignUpModal';
import UserTypeSelection from './components/UserTypeSelection';

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserTypeSelection />
      </div>
    );
  }
}

export default App;
