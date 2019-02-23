import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { login } from '../actions';
import {Link} from 'react-router-dom';

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
    this.props.history.push('/home/donor');
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
          <span>Not registered? <Link to='/register'>Sign Up</Link></span>
        </div>
      </LoginContainer>
    );
  }
}

export default connect(null, {login: login})(LoginModal);
