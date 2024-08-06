import styled from "styled-components";
import theme from "../../styles/theme";
import isMobile from "is-mobile";

export const Wrapper = styled.div`
  color: ${theme.color.BLACK};
  margin: 10rem 0 0 0;

  .title {
    text-align: center;
    font-family: ${theme.font.NOTO[8]};
    font-size: ${theme.font.SIZE.XXXL};
    box-shadow: 0 8px 0 ${theme.color.SKY_BLUE};
    line-height: 21px;
    width: fit-content;

    margin: 0 0 8rem 0;
  }

  .underline {
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
        font-family: ${theme.font.NOTO[7]};
        color: ${theme.color.BLACK};
        font-size: ${theme.font.SIZE.L};
      }

      .comment {
        margin-top: 1rem;
        font-family: ${theme.font.NOTO[5]};
        color: ${theme.color.MID_GRAY};
        font-size: ${theme.font.SIZE.SM};
      }

      img {
        margin: 1.4rem 0 2rem 0;
        width: ${isMobile() ? "70vw" : "282px"};
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
    background-color: ${theme.color.LIGHT_GRAY};
    padding: 8rem 0;
    margin-top: 6rem;

    .title {
      color: ${theme.color.BLACK};
    }

    .c-box {
      background-color: ${theme.color.WHITE};
      border-radius: 1rem;
      padding: 2rem;
      width: ${isMobile() ? "90vw" : "340px"};
      margin-bottom: 2rem;
      box-shadow: 1px 1px 14px 1px lightgray;

      font-family: ${theme.font.NOTO[5]};
      color: ${theme.color.BLACK};
      font-size: ${theme.font.SIZE.SM};

      .c-header {
        gap: 1rem;
        margin-bottom: 1.4rem;
      }

      .c-name {
        font-size: ${theme.font.SIZE.ML};
        font-family: ${theme.font.NOTO[6]};
      }

      .c-date {
        color: ${theme.color.MID_GRAY};
      }

      .c-text {
        line-height: 1.8rem;
      }
    }
  }
`;
