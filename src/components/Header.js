import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  max-width: 1430px;
  width: 100%;
  color: #FFF;
  padding: 10px 30px;
  background-color: #1363A8;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const LogoContainer = styled.a`
  text-decoration: none;
  font-size: 36px;
`

const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer>Bountiful</LogoContainer>
      <button>Sign Out</button>
    </HeaderContainer>
  );
}

export default Header;
