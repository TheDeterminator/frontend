import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { login, getCoordUser } from '../actions';
import {Redirect} from 'react-router-dom';

import LoginContainer from '../design/LoginContainer';
import Form from '../design/Form';
import Button from '../design/Button';

class LoginModal extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      credentials: {
        username: ``,
        password: ``
      }
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
    this.props.history.push('/home/coordinator');
  }

  componentDidMount(){
    const token = localStorage.getItem('jwt');
    const id = localStorage.getItem('user_id');
    const options = {
      headers: {
          Authorization: token,
      }
    }
    this.props.getCoordUser(id, options);
  }



  render(){
    return (
      <LoginContainer>
        <h1>Login</h1>
        <Form onSubmit={this.loginHandler} method='POST'>
          <input onChange={this.changeHandler} placeholder='Username' name='username' value={this.state.credentials.username}/>
          <input onChange={this.changeHandler} placeholder='Password' type='password' name='password' value={this.state.credentials.password}/>
          <Button type='submit'>Login</Button>
        </Form>
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

export default connect(null, {login: login, getCoordUser: getCoordUser})(LoginModal);
