import styled from "styled-components";
import theme from '../design/theme';

const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5px 0;
    padding: 10px;

    input {
      width: 60%;
      max-width: 350px;
      height: 40px;
      margin: 5px 0;
      padding: 5px;
      font-size: ${theme.fontSizing.s};
      border: 1px solid ${theme.color.primaryBgShading};
      border-radius: 5px;
    }

    button {
      margin: 5px 0;
    }
`

export default Form;