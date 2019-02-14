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
  border: 1px solid #000;
  border-radius: 5px;
  width: 220px;
  height: 30px;
  margin-bottom: 15px;
`
const NameInput = styled.input`
  font-size: 16px;
  border: 1px solid #000;
  border-radius: 5px;
  width: 100px;
  height: 30px;
`
const Button = styled.button`
  width: 220px;
  height: 35px;
  border-radius: 5px;
  background-color: #00FF00;
  border: none;
`

class SignUpModal extends React.Component {
  constructor(){
    super();
    this.state = {
      coordinator: false,
      donor: true,
      buttonToggle: true,
      countries: ['Bolivia', 'Brazil', 'Cambodia', 'Colombia', 'Ecuador', 'El Salvador', 'Ghana', 'Guatemala', 'Haiti', 'Honduras', 'Kiribati', 'Madagascar', 'Mongolia', 'Nicaragua', 'Paraguay', 'Peru', 'Philippines', 'Sierra Leone', 'Zimbabwe']
    }
  }
  render(){
    return (
      <LoginContainer>
        <h1>Sign Up</h1>
        {!this.state.coordinator ? <Form>
          <NameInputContainer>
            <NameInput placeholder='First Name' />
            <NameInput placeholder='Last Name' />
          </NameInputContainer>
          <Input placeholder='Email' />
          <Input placeholder='Username'/>
          <Input placeholder='Password' type='password' />
          <Input placeholder='Confirm Password' type='password' />
          {this.state.buttonToggle ? <Button>Sign Up</Button> : <Button onClick={e => this.setState({coordinator: true, donor: false})}>Continue</Button>}
        </Form> : null}
        {this.state.coordinator ? <Form>
          <Input placeholder='Organization Title' />
          <select>
            {this.state.countries.map(country => <option>{country}</option>)}
          </select>
          <Button>Sign Up</Button>
          <Button onClick={e => this.setState({coordinator: false, donor: true})}>Back</Button>
        </Form> : null}
      </LoginContainer>
    );
  }
}

export default SignUpModal;
