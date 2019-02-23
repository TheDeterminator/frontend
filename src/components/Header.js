import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import {logout} from '../actions';

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

class Header extends React.Component {
  constructor(props){
    super(props);
  }

  logoutUser = e => {
    localStorage.clear();
    this.props.logout();
    this.props.history.push('/home');
  }

  render(){
    return (
      <HeaderContainer>
        <HeaderWrapper>
          <Logo>
            <div>Bountiful</div>
          </Logo>
          <div>
            {this.props.userLoggedIn ? <button onClick={this.logoutUser}>Sign Out</button> : null}
          </div>
        </HeaderWrapper>
      </HeaderContainer>
    );
  };
}

const mstp = state => {
  return ({
    userLoggedIn: state.userLoggedIn
  });
}

export default connect(mstp, {logout: logout})(Header);
