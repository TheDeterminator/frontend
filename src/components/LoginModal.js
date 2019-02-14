import React from 'react';
import styled from 'styled-components';

const LoginContainer = styled.div`
  width: 300px;
  height: 425px;
  background-color: #F7F7F7;
  border-radius: 3px;
  margin-left: 25px;
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid grey;
`
const Input = styled.input`
  font-size: 16px;
  border: 1px solid #000;
  border-radius: 5px;
  width: 220px;
  height: 30px;
  margin-bottom: 15px;
`
const LoginButton = styled.button`
  width: 220px;
  height: 35px;
  border-radius: 5px;
  background-color: #00FF00;
  border: none;
`
const FBButton = styled.button`
  width: 220px;
  height: 35px;
  border-radius: 5px;
  background-color: #4267b2;
  margin-top: 20px;
  margin-bottom: 15px;
  border: none;
`
const GoogleButton = styled.button`
  width: 220px;
  height: 35px;
  border-radius: 5px;
  background-color: #4285F4;
  margin-top: 45px;
  border: none;
`

class LoginModal extends React.Component {
  render(){
    return (
      <LoginContainer>
        <h1>Login</h1>
        <div>
          <Input placeholder='email...' />
          <Input placeholder='password...' type='password' />
          <LoginButton>Login</LoginButton>
        </div>
        <div>
          <GoogleButton>Login with Google</GoogleButton>
          <FBButton>Login with Facebook</FBButton>
        </div>
        <div>
          <span>Not registered? <a href=''>Sign Up</a></span>
        </div>
      </LoginContainer>
    );
  }
}

export default LoginModal;
