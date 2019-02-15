import React from 'react';
import styled from 'styled-components';

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
  render(){
    return (
      <LoginContainer>
        <h1>Login</h1>
        <div>
          <Input placeholder='Username' />
          <Input placeholder='Password' type='password' />
          <LoginButton>Login</LoginButton>
        </div>
        <div>
          <span>Not registered? <a href=''>Sign Up</a></span>
        </div>
      </LoginContainer>
    );
  }
}

export default LoginModal;
