import React from 'react';
import styled from 'styled-components';

const LoginContainer = styled.div`
  width: 300px;
  height: 425px;
  background-color: #D1DAE5;
  border-radius: 3px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
`
const NameInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  justify-content: space-between;
`
const Input = styled.input`
  font-size: 16px;
  border: none;
  border-radius: 5px;
  width: 220px;
  height: 30px;
  margin-bottom: 15px;
`
const NameInput = styled.input`
  font-size: 16px;
  border: none;
  border-radius: 5px;
  width: 100px;
  height: 30px;
`
const Button = styled.button`
  width: 220px;
  height: 35px;
  border-radius: 5px;
  background-color: #FF7F50;
  border: none;
  margin-bottom: 15px;
`
const Select = styled.select`
  margin-bottom: 15px;
`

const SignUpModal = (props) => {
  return (
    <LoginContainer>
      <h1>Sign Up</h1>
      {props.coordinatorSelected ? null : <Form>
        <NameInputContainer>
          <NameInput placeholder='First Name' />
          <NameInput placeholder='Last Name' />
        </NameInputContainer>
        <Input placeholder='Email' />
        <Input placeholder='Username'/>
        <Input placeholder='Password' type='password' />
        <Input placeholder='Confirm Password' type='password' />
        {props.userType === 'donor' ? <Button>Sign Up</Button> : <Button onClick={props.continueButton}>Continue</Button>}
      </Form>}
      {props.userType === 'coordinator' && props.coordinatorSelected ? <Form>
        <Input placeholder='Organization Title' />
        <Select>
          {props.countries.map(country => <option>{country}</option>)}
        </Select>
        <Button>Sign Up</Button>
        <Button onClick={props.backButton}>Back</Button>
      </Form>: null}
    </LoginContainer>
  );
}

export default SignUpModal;
