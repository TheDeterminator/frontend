import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { login, getCoordUser } from '../actions';
import {Redirect} from 'react-router-dom';

const LoginContainer = styled.div`
  width: 300px;
  height: 250px;
  background-color: #D1DAE5;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto;
`
const Input = styled.input`
  font-size: 16px;
  border: none;
  border-radius: 5px;
  width: 220px;
  height: 30px;
  margin-bottom: 15px;
`
const LoginButton = styled.button`
  width: 220px;
  height: 35px;
  border-radius: 5px;
  background-color: #FF7F50;
  border: none;
`

class LoginModal extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      credentials: {
        username: ``,
        password: ``
      },
      redirect: false
    }
  }

  changeHandler = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name] : e.target.value
      }
    });
  }
  loginHandler = e => {
    e.preventDefault();
    this.props.login(this.state.credentials);
    const token = localStorage.getItem('jwt');
    const userID = localStorage.getItem('user_id');
    console.log(userID);
    const options = {
      headers: {
          Authorization: token,
      }
    };
  }



  render(){
    return (
      <LoginContainer>
        <h1>Login</h1>
        <form onSubmit={this.loginHandler} method='POST'>
          <Input onChange={this.changeHandler} placeholder='Username' name='username' value={this.state.credentials.username}/>
          <Input onChange={this.changeHandler} placeholder='Password' type='password' name='password' value={this.state.credentials.password}/>
          <LoginButton type='submit'>Login</LoginButton>
        </form>
        <div>
          <span>Not registered? <a href='#'>Sign Up</a></span>
        </div>
      </LoginContainer>
    );
  }
}

const mstp = state => {
  return ({
    user: state.user
  });
}

export default connect(mstp, {login: login, getCoordUser: getCoordUser})(LoginModal);
