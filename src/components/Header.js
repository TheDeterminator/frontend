import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import {logout, switchToMyStories, switchToAllStories} from '../actions';

import theme from '../design/theme';
import Logo from '../design/Logo';
import NavMenu from '../design/NavMenu';

const HeaderContainer = styled.header`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${theme.colorScheme.headerFontColor};
  background: ${theme.colorScheme.headerBgColor};
  top: 0;
  position: sticky;
  z-index: 10;
  @media (min-width: 801px){
    max-width: 1430px;
  }
`

const HeaderWrapper = styled.div`
  width: 90%;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media ${theme.breakpoints[1]}{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`

class Header extends React.Component {

  logoutUser = e => {
    localStorage.clear();
    this.props.logout();
    this.props.history.push('/home');
  }

  myStories = e => {
    this.props.switchToMyStories();
    this.props.history.push('/home/coordinator');
  }

  allStories = e => {
    this.props.switchToAllStories();
    this.props.history.push('/home/donor');
  }

  render(){
    return (
      <HeaderContainer>
        <HeaderWrapper>
          <Logo>
            <div>Bountiful</div>
          </Logo>
          <NavMenu>
            {this.props.showMyStoriesButton ? <a onClick={this.myStories}>My Stories</a> : null}
            {this.props.showAllStoriesButton ? <a onClick={this.allStories}>All Stories</a> : null}         
            {this.props.userLoggedIn ? <a onClick={this.logoutUser}>Sign Out</a> : null}
          </NavMenu>
        </HeaderWrapper>
      </HeaderContainer>
    );
  };
}

const mstp = state => {
  return ({
    userLoggedIn: state.userLoggedIn,
    showMyStoriesButton: state.showMyStoriesButton,
    showAllStoriesButton: state.showAllStoriesButton
  });
}

export default connect(mstp, {logout: logout, switchToMyStories: switchToMyStories, switchToAllStories: switchToAllStories})(Header);
