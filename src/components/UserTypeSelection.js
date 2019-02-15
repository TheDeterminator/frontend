import React from 'react';
import styled from 'styled-components';

const SelectionContainer = styled.div`
  width: 300px;
  height: 150px;
  background-color: #D1DAE5;
  border: none;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 50px auto;
`
const ButtonContainer = styled.div`
  width: 300px;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`
const Button = styled.button`
  width: 100px;
  height: 25px;
  background-color: #FF7F50;
  border: none;
  border-radius: 5px;
`

const UserTypeSelection = (props) => {
  return (
    <SelectionContainer>
      <div>Are you a...</div>
      <ButtonContainer>
        <Button onClick={props.selectCoordinator}>Coordinator</Button>
        <div>or</div>
        <Button onClick={props.selectDonor}>Donor</Button>
      </ButtonContainer>
    </SelectionContainer>
  );
};

export default UserTypeSelection;
