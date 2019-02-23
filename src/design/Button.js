import styled from "styled-components";
import theme from '../design/theme';

const Button = styled.button`
  width: 100px;
  padding: 5px;
  border-radius: 15px;
  text-align: center;
  font-size: ${theme.fontSizing.xs};
  decor: none;
  cursor: pointer;
  color: ${theme.color.lightText};
  background: ${props => props.alert ? theme.color.accent : theme.color.primaryColor};

  @media ${theme.breakpoints[1]} {
    font-size: ${theme.fontSizing.s};
  }

`

export default Button;