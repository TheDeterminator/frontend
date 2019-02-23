import styled from "styled-components";
import theme from '../design/theme';

const NavMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${theme.breakpoints[1]} {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: baseline;
    margin-bottom: 10px;
  }

  a {
    width: 100%;
    margin: 0 2.78vw;
    padding: 20px 10px;
    border-bottom: 1px solid ${theme.color.primaryDark};
    text-align: center;
    text-decoration: none;
    font-size: ${theme.fontSizing.s};
    font-weight: 600;
    line-height: 2.6rem;
    letter-spacing: 0.2rem;
    color: ${theme.colorScheme.headerFontColor};
    white-space: nowrap;
    
    @media ${theme.breakpoints[1]} {
      width: auto;
      margin: 0 1.39vw;
      padding: 12px;
      border-bottom: initial;
    }

    &:hover {
      color: ${theme.colorScheme.headerBgColor};
      background: ${theme.colorScheme.headerFontColor};
    }

    &:first-child {
      border-top: 1px solid ${theme.color.primaryDark};
      @media ${theme.breakpoints[1]} {
        border: none;
      }
    }  
  }
`

export default NavMenu;