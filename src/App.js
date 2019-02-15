import React, { Component } from 'react';
import './App.css';

//import LoginModal from './components/LoginModal';
//import SignUpModal from './components/SignUpModal';
//import UserTypeSelection from './components/UserTypeSelection';
//import Registration from './components/Registration';
//import ListviewComponent from './components/ListviewComponent';
import GridviewComponent from './components/GridviewComponent';


class App extends Component {
  render() {
    return (
      <div className="App">
        <GridviewComponent />
      </div>
    );
  }
}

export default App;
