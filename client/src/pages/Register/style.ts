import styled from "styled-components";
import theme from "../../styles/theme";

export const InputSection = styled.div`
  color: ${theme.color.BLACK};
  font-family: ${theme.font.NOTO[6]};
  font-size: ${theme.font.SIZE.ML};
  padding: 9rem 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow-y: scroll;

  .box {
    margin: 1rem 0 1.6rem 0;
  }

  .label {
    margin: 0 0 1rem 0;
  }

  .br {
    margin: 1rem 0;
  }
`;
