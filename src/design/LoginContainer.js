import styled from "styled-components";
import theme from '../design/theme';

const LoginContainer = styled.div`
  width: 90%;
  max-width: 600px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${theme.color.primaryBgShading};
  border-radius: 3px;
  margin: 0 auto;
`

export default LoginContainer;