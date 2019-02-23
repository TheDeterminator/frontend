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
  margin: 0 auto;
  border-radius: 3px;
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 
  0 7px 20px 0 rgba(0, 0, 0, 0.17);  
  background-color: ${theme.color.primaryBgShading};
`

export default LoginContainer;