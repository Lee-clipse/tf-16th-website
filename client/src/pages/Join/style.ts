import styled from "styled-components";
import theme from "../../styles/theme";

export const InputSection = styled.div`
  color: ${theme.color.TEXT_BLACK};
  font-family: ${theme.font.NOTO[6]};
  font-size: ${theme.font.SIZE.ML};
  padding: 0 3rem;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;

  .box {
    margin: 1rem 0 1.6rem 0;
  }

  .label {
    margin: 0 0 1rem 0;
  }

  .br {
    margin: 1rem 0;
  }

  #staff-button {
    color: ${theme.color.MAIN_BLUE};
    font-size: ${theme.font.SIZE.SM};
    text-decoration: underline;
    text-align: center;
    margin-top: 2rem;
  }
`;
