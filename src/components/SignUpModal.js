import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {register} from '../actions';

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
const Form = styled.div`
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

class SignUpModal extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      firstName: ``,
      lastName: ``,
      email: ``,
      username: ``,
      password: ``,
      confirmPassword: ``,
      title: ``,
      country: ``
    }
  }

  changeHandler = e => {
    this.setState({...this.state,[e.target.name] : e.target.value})
  }

  selectChangeHandler = e => {
    this.setState({
      country: e.target.value
    });
  }

  registerNewCoord = e => {
    this.props.register({
      username: this.state.username,
      password: this.state.password,
      email: this.state.email,
      role: this.props.userType,
      country: this.state.country,
      organization_title: this.state.country
    });
  }

  registerNewDonor = e => {
    this.props.register({
      username: this.state.username,
      password: this.state.password,
      email: this.state.email,
      role: this.props.userType,
    });
  }

  render(){
    return (
      <LoginContainer>
        <h1>Sign Up</h1>
        {this.props.coordinatorSelected ? null : <Form>
          <NameInputContainer>
            <NameInput onChange={this.changeHandler} name='firstName' value={this.state.firstName} placeholder='First Name' />
            <NameInput onChange={this.changeHandler} name='lastName' value={this.state.lastName} placeholder='Last Name' />
          </NameInputContainer>
          <Input onChange={this.changeHandler} name='email' value={this.state.email} placeholder='Email' />
          <Input onChange={this.changeHandler} name='username' value={this.state.username} placeholder='Username'/>
          <Input onChange={this.changeHandler} name='password' value={this.state.password} placeholder='Password' type='password' />
          <Input onChange={this.changeHandler} name='confirmPassword' value={this.state.confirmPassword} placeholder='Confirm Password' type='password' />
          {this.props.userType === 'Donor' ? <Button onClick={this.registerNewDonor}>Sign Up</Button> : <Button onClick={this.props.continueButton}>Continue</Button>}
        </Form>}
        {this.props.userType === 'Coordinator' && this.props.coordinatorSelected ? <Form>
          <Input onChange={this.changeHandler} name='title' value={this.state.title} placeholder='Organization Title' />
          <Select onChange={this.selectChangeHandler} value={this.state.country}>
            {this.props.countries.map(country => <option value={country}>{country}</option>)}
          </Select>
          <Button onClick={this.registerNewCoord}>Sign Up</Button>
          <Button onClick={this.props.backButton}>Back</Button>
        </Form>: null}
      </LoginContainer>
    );
  }
}

export default connect(null, {register: register})(SignUpModal);
