import styled, { keyframes } from "styled-components";
import theme from "../../styles/theme";

const moveToLeft = keyframes`
  0% {
    transform: translateX(-80%);
  }
  100% {
    transform: translateX(-498%);
  }
`;

export const Wrapper = styled.div`
  margin: 10rem 0 0 0;
  color: ${theme.color.BLACK};

  .gap {
    margin: 8rem 0;
  }

  #poster-list-wrapper {
    overflow: hidden;
    width: 100vw;

    #poster-list {
      gap: 1rem;
      margin-top: 3.6rem;
      animation: ${moveToLeft} 5s linear infinite;

      img {
        width: 80vw;
      }
    }
  }

  #title-comment {
    font-family: ${theme.font.NOTO[4]};
    font-size: ${theme.font.SIZE.M};
    padding: 0 2rem;
    line-height: 1.8rem;
  }

  .sub-title {
    color: ${theme.color.TEAL_BLUE};
    font-family: ${theme.font.NOTO[7]};
    font-size: ${theme.font.SIZE.ML};
    margin-bottom: 1rem;
    text-align: center;
  }

  .title {
    font-family: ${theme.font.NOTO[7]};
    font-size: ${theme.font.SIZE.XL};
    margin-bottom: 4rem;
    gap: 0.6rem;
    text-align: center;
  }

  #class-list {
    padding: 0 2rem;
    margin-top: 6rem;

    .c-title {
      color: ${theme.color.DEEP_BLUE};
      font-family: ${theme.font.NOTO[7]};
      font-size: ${theme.font.SIZE.ML};
      margin-top: 4rem;
      margin-bottom: 1.6rem;
    }

    .c-text {
      color: ${theme.color.BLACK};
      font-family: ${theme.font.NOTO[4]};
      font-size: ${theme.font.SIZE.SM};
      line-height: 1.8rem;
      margin-bottom: 2rem;
    }

    .c-tag {
      color: ${theme.color.TEAL_BLUE};
      font-family: ${theme.font.NOTO[6]};
      font-size: ${theme.font.SIZE.SM};
      margin-bottom: 1rem;
      word-spacing: 0.6rem;
    }

    .c-photo {
      gap: 1rem;

      img {
        width: 100%;
        border-radius: 0.4rem;
      }
    }
  }
`;
