import React from 'react';
import styled from 'styled-components';

import LoginContainer from '../design/LoginContainer';
import Button from '../design/Button';

const ButtonContainer = styled.div`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`

const UserTypeSelection = (props) => {
  return (
    <LoginContainer>
      <div>Are you a...</div>
      <ButtonContainer>
        <Button onClick={props.selectCoordinator}>Coordinator</Button>
        <div>or</div>
        <Button onClick={props.selectDonor}>Donor</Button>
      </ButtonContainer>
    </LoginContainer>
  );
};

export default UserTypeSelection;
