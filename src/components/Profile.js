import React from 'react';
import styled from 'styled-components';

import Form from '../design/Form';
import Button from '../design/Button';

//Fields that can be updated.
// username: STRING, unique, max 100 chars
// password: STRING
// email: STRING, unique
// country: STRING [ 'Bolivia', 'Brazil', 'Cambodia', 'Colombia', 'Ecuador', 'El Salvador', 'Ghana', 'Guatemala', 'Haiti', 'Honduras', 'Kiribati', 'Madagascar', 'Mongolia', 'Nicaragua', 'Paraguay', 'Peru', 'Philippines', 'Sierra Leone', 'Zimbabwe' ]
// organization_title: STRING

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
          <Button onClick={e => this.setState({editUser: true})}>Edit</Button>
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
          <Button onClick={e => this.setState({editUser: false})}>Save</Button>
        </Form>}
      </div>
    );
  }
}

export default Profile;
