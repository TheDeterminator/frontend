import React from 'react';
import styled from 'styled-components';

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
const Logo = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 800px) and (min-width: 768px), (min-width: 801px){
    width: auto;
  }
`

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <Logo>
          <div>Bountiful</div>
        </Logo>
      </HeaderWrapper>
    </HeaderContainer>
  );
}

export default Header;
