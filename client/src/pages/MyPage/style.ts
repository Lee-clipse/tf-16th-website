import styled from "styled-components";
import theme from "../../styles/theme";

export const Wrapper = styled.div`
  padding: 10rem 2rem 12rem 2rem;

  #title-box {
    color: ${theme.color.BLACK};
    font-family: ${theme.font.NOTO[8]};
    font-size: ${theme.font.SIZE.XL};
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .mini-title {
      font-size: ${theme.font.SIZE.ML};
      margin-top: 0.6rem;
      align-items: end;
    }

    .number {
      font-size: ${theme.font.SIZE.XXXL};
    }

    .highlight {
      color: ${theme.color.TEAL_BLUE};
      margin: 0 0.4rem 0 0.6rem;
    }

    p {
      font-family: ${theme.font.OSW[6]};
      margin: 0 0.4rem 0 0.6rem;
    }
  }

  #content-box {
    margin-top: 4rem;
    color: ${theme.color.BLACK};
    font-family: ${theme.font.NOTO[4]};

    #content-title {
      margin-bottom: 2rem;
      font-family: ${theme.font.NOTO[8]};
      font-size: ${theme.font.SIZE.L};
    }

    .box {
      font-size: ${theme.font.SIZE.L};
      display: flex;
      flex-direction: row;
      gap: 0.4rem;
      margin-bottom: 1.8rem;
    }

    label {
      font-family: ${theme.font.NOTO[6]};
    }

    .content {
    }
  }

  #button-box {
    margin-top: 6rem;

    #logout-button {
      margin-top: 1.4rem;
      font-size: ${theme.font.SIZE.SM};
      font-family: ${theme.font.NOTO[7]};
      color: ${theme.color.GRAY};
      text-decoration: underline;
    }
  }
`;
