import styled from "styled-components";
import theme from '../design/theme';

const NavMenu = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: baseline;
    margin-bottom: 10px;

    @media ${theme.breakpoints[0]} {
          border: 1px solid magenta;
          display: flex;
          flex-direction: column-reverse;
          justify-content: center;
          align-items: center;
    }

    a {
      width: auto;
      margin: 0 1.39vw;
      padding: 12px;
      text-align: center;
      text-decoration: none;
      font-size: ${theme.fontSizing.s};
      font-weight: 600;
      line-height: 2.6rem;
      letter-spacing: 0.2rem;
      color: ${theme.colorScheme.headerFontColor};
      white-space: nowrap;
      
      @media ${theme.breakpoints[0]} {
        border: 1px solid red;
        width: 100%;
        margin: 0 2.78vw;
        padding: 20px 10px;
        border-bottom: 1px solid ${theme.color.primaryDark};
      }

      &:hover {
        color: ${theme.colorScheme.headerBgColor};
        background: ${theme.colorScheme.headerFontColor};
      }
    }
  }
`

export default NavMenu;