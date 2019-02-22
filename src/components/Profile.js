import React from 'react';
import styled from 'styled-components';

//Fields that can be updated.
// username: STRING, unique, max 100 chars
// password: STRING
// email: STRING, unique
// country: STRING [ 'Bolivia', 'Brazil', 'Cambodia', 'Colombia', 'Ecuador', 'El Salvador', 'Ghana', 'Guatemala', 'Haiti', 'Honduras', 'Kiribati', 'Madagascar', 'Mongolia', 'Nicaragua', 'Paraguay', 'Peru', 'Philippines', 'Sierra Leone', 'Zimbabwe' ]
// organization_title: STRING
const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 200px;
  margin: 0 auto;
`
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`

class Profile extends React.Component{
  constructor(){
    super();
    this.state = {
      editUser: false
    }
  }

  render(){
    return(
      <div>
        {!this.state.editUser ? <InfoContainer>
          <span>current username</span>
          <span>don't show current pw, just field when update is selected</span>
          <span>current email</span>
          <span>current org title</span>
          <span>current country</span>
          <span>show role, but not editable</span>
          <button onClick={e => this.setState({editUser: true})}>Edit</button>
        </InfoContainer> :
        <Form>
          <input placeholder='username' />
          <input placeholder='password' />
          <input placeholder='email' />
          <input placeholder='organization title' />
          <select>
            <option>
              Countries
            </option>
          </select>
          <button onClick={e => this.setState({editUser: false})}>Save</button>
        </Form>}
      </div>
    );
  }
}

export default Profile;
