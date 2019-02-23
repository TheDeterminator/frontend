import React from 'react';
import styled from 'styled-components';
import Logo from '../design/Logo';
import NavMenu from '../design/NavMenu';

const HeaderContainer = styled.header`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #FFFFFF;
  background: #1363A8;
  top: 0;
  position: sticky;
  z-index: 10;
  @media (min-width: 801px){
    max-width: 1430px;
  }
`
const HeaderWrapper = styled.a`
  width: 90%;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: normal;
  @media (min-width: 801px){
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <Logo>
          <div>Bountiful</div>
        </Logo>
        <NavMenu>
          <a>
            About
          </a>
          <a>
            Logout
          </a>
        </NavMenu>
      </HeaderWrapper>
    </HeaderContainer>
  );
}

export default Header;
