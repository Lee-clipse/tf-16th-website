import styled from "styled-components";
import theme from "../../styles/theme";

export const Wrapper = styled.div`
  padding: 16rem 2rem 12rem 2rem;
  gap: 3rem;

  font-size: ${theme.font.SIZE.XL};
  font-family: ${theme.font.NOTO[5]};
  color: ${theme.color.BLACK};

  #p {
    font-size: ${theme.font.SIZE.XXXXXL};
    color: ${theme.color.ORANGE};
    font-family: ${theme.font.NOTO[6]};
  }

  #b-btn {
    border-radius: 0.6rem;
    padding: 1.2rem;
    color: ${theme.color.SKY_BLUE};
    font-family: ${theme.font.NOTO[6]};
    font-size: ${theme.font.SIZE.L};
    border: 3px solid ${theme.color.SKY_BLUE};
  }
`;
