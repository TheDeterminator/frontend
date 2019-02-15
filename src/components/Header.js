import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  width: 100%;
  height: 75px;
  background-color: #1363A8;
  box-shadow: 0px 3px 1px #0F5080;
  display: flex;
  justify-content: center;
  align-items: center;
`
const LogoContainer = styled.div`
  width: 90%;
  display: flex;
`

const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer>Bountiful</LogoContainer>
    </HeaderContainer>
  );
}

export default Header;
