import React from 'react';
import styled from 'styled-components';

const SelectionContainer = styled.div`
  width: 600px;
  height: 150px;
  border: 1px solid black;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const ButtonContainer = styled.div`
  width: 400px;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const Button = styled.button`
  width: 100px;
  height: 25px;
  border: 1px solid black;
  border-radius: 5px;
`

const UserTypeSelection = () => {
  return (
    <SelectionContainer>
      <div>Are you a...</div>
      <ButtonContainer>
        <Button>Coordinator</Button>
        <div>or</div>
        <Button>Donor</Button>
      </ButtonContainer>
    </SelectionContainer>
  );
};

export default UserTypeSelection;
