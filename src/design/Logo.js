import styled from "styled-components";
import theme from '../design/theme';

const Logo = styled.h1`
  font-family: ${theme.fontStyles.logoFont};
  font-size: ${theme.fontSizing.xl};
  color: ${theme.colorScheme.headerFontColor};
  padding: 10px 0;
`

export default Logo;