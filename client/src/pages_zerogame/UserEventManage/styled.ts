import styled from "styled-components";
import theme from "../../styles/theme";

export const Wrapper = styled.div`
  padding: 16rem 2rem 12rem 2rem;
  gap: 3rem;

  font-size: ${theme.font.SIZE.XL};
  font-family: ${theme.font.NOTO[5]};
  color: ${theme.color.BLACK};

  #w-title {
    .h {
      color: ${theme.color.SKY_BLUE};
      font-family: ${theme.font.NOTO[7]};
    }
  }

  #t {
    color: ${theme.color.MID_GRAY};
    margin-bottom: 4rem;
  }

  .btn {
    border-radius: 0.6rem;
    padding: 1rem;
    color: ${theme.color.WHITE};
    font-family: ${theme.font.NOTO[6]};
    font-size: ${theme.font.SIZE.XL};
    box-shadow: 5px 0 7px rgba(0, 0, 0, 0.6);
  }

  #l-btn {
    background-color: ${theme.color.DEEP_BLUE};
  }

  #r-btn {
    background-color: ${theme.color.PURPLE};
  }
`;
