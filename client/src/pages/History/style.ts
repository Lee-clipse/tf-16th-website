import styled from "styled-components";
import theme from "../../styles/theme";

export const Wrapper = styled.div`
  color: ${theme.color.BLACK};
  margin: 10rem 0 0 0;

  .title {
    text-align: center;
    font-family: ${theme.font.NOTO[9]};
    font-size: ${theme.font.SIZE.XXXXL};
    margin: 0 0 8rem 0;
  }

  #photo-section {
    .fade-box {
      display: flex;
      flex-direction: column;
      opacity: 0;
      transition: opacity 1s ease-in-out;
    }

    .visible {
      opacity: 1;
    }

    .box {
      margin-bottom: 3rem;

      .name {
        font-family: ${theme.font.NOTO[9]};
        color: ${theme.color.DEEP_BLUE};
        font-size: ${theme.font.SIZE.XL};
      }

      .comment {
        margin-top: 1rem;
        font-family: ${theme.font.NOTO[5]};
        color: ${theme.color.BLACK};
        font-size: ${theme.font.SIZE.SM};
      }

      img {
        margin: 1.4rem 0 2rem 0;
        width: 70vw;
        // max-width: 40vw;
      }
    }

    .left-box {
      .name {
        margin-left: 1rem;
      }

      .comment {
        margin-left: 1rem;
      }

      img {
        border-top-right-radius: 0.4rem;
        border-bottom-right-radius: 0.4rem;
      }
    }

    .right-box {
      text-align: right;
      .name {
        margin-right: 1rem;
      }

      .comment {
        margin-right: 1rem;
      }

      img {
        border-top-left-radius: 0.4rem;
        border-bottom-left-radius: 0.4rem;
      }
    }

    .center-box {
      text-align: center;

      img {
        border-radius: 0.4rem;
      }
    }
  }

  #comment-section {
    background-color: ${theme.color.MILKY_BLUE};
    padding: 8rem 0;
    margin-top: 6rem;
    .title {
      color: ${theme.color.DEEP_BLUE};
    }
  }
`;
