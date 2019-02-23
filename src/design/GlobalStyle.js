import { createGlobalStyle } from "styled-components";
import theme from '../design/theme';

const GlobalStyle = createGlobalStyle `
  @import url('https://fonts.googleapis.com/css?family=Dancing+Script:400,700');
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,400i,600,600i,700,700i,900|Roboto:400,500,700');
  @import url('https://fonts.googleapis.com/css?family=Sanchez');

  html {
    font-size: 62.5%;
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    padding: 0;
    margin: 0;
    font-size: ${theme.fontSizing.s}
  }

  h1, h2, h3, h4, h5 {
    font-family: ${theme.fontStyles.headingFont};
    color: ${theme.colorScheme.headingColor};
  }

  h1 {
    font-size: ${theme.fontSizing.ml};
    font-weight: bold;
    
    @media ${theme.breakpoints[1]} {
      font-size: @l;
    }

    @media ${theme.breakpoints[2]} {
      font-size: @l;
    }
  }

  h2 {
    font-size: ${theme.fontSizing.m};
    font-weight: bold;

    @media ${theme.breakpoints[2]} {
      font-size: ${theme.fontSizing.ml};
    }
  }

  h3 {
    font-size: ${theme.fontSizing.s};
    font-weight: bold;

    @media ${theme.breakpoints[2]} {
      font-size: ${theme.fontSizing.m};
    }
  }

  h4 {
    font-size: ${theme.fontSizing.xs};
    font-weight: bold;

    @media ${theme.breakpoints[2]} {
      font-size: ${theme.fontSizing.sm};
    }
  }
  
  p {
    font-family: ${theme.fontStyles.defaultFont};
    color: ${theme.colorScheme.defaultFontColor};
  }

  a {
    text-decoration: none;
    font-size: ${theme.fontSizing.xs};
    font-weight: 600;
    color: ${theme.colorScheme.defaultLinkColor};

    @media ${theme.breakpoints[2]} {
      font-size: ${theme.fontSizing.s};
    }

    &:hover {
      text-decoration: underline;
    }
  } 


`

export default GlobalStyle;