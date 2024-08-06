import styled from "styled-components";
import theme from "../../styles/theme";
import isMobile from "is-mobile";
import { WEB_WIDTH } from "../../common/const";

export const Wrapper = styled.div`
  margin: 5.6rem 0 0 0;

  .highlight {
    color: ${theme.color.BLACK};
    font-family: ${theme.font.NOTO[8]};
    display: contents;
  }
`;

// 청년이 건강해야 부산이 산다고?
export const Section1 = styled.div`
  color: ${theme.color.BLACK};

  .title-box {
    font-family: ${theme.font.NOTO[8]};
    font-size: ${theme.font.SIZE.XL};
    color: ${theme.color.WHITE};
    width: ${isMobile() ? "100vw" : WEB_WIDTH};
    height: 28vh;
    position: relative;
    text-align: center;
    align-items: center;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
    }
  }

  .content {
    margin-top: 5rem;
    padding: 0 2rem;

    .card {
      margin-bottom: 5rem;

      .c-title {
        color: ${theme.color.BLACK};
        font-family: ${theme.font.NOTO[9]};
        font-size: ${theme.font.SIZE.M};
        padding-bottom: 1.4rem;
      }

      .c-content {
        color: ${theme.color.BLACK};
        font-family: ${theme.font.NOTO[4]};
        font-size: ${theme.font.SIZE.SM};
        line-height: 2rem;
        margin-top: 1rem;
      }
    }
  }
`;

// 슬로건
export const Section2 = styled.div`
  color: ${theme.color.BLACK};
  margin-top: 12rem;

  .title-2 {
    font-family: ${theme.font.NOTO[8]};
    font-size: ${theme.font.SIZE.XXL};
    text-align: center;
  }

  .content-2 {
    padding: 0 3rem;
    margin-top: 5rem;
    text-align: center;

    .icon-2 {
      margin-top: 5rem;
      text-align: center;
      width: 100%;

      img {
        width: ${isMobile() ? "26vw" : "8vw"};
      }
    }

    .label-2 {
      font-family: ${theme.font.NOTO[7]};
      font-size: ${theme.font.SIZE.L};
      margin-top: 3rem;
      text-align: center;
    }

    .text-2 {
      font-family: ${theme.font.NOTO[4]};
      font-size: ${theme.font.SIZE.SM};
      line-height: 2rem;
      margin-top: 1.6rem;
    }
  }
`;

//나, 너, 우리
export const Section3 = styled.div`
  color: ${theme.color.BLACK};
  background-color: ${theme.color.LIGHT_GRAY};
  margin-top: 10rem;
  padding-top: 6rem;
  padding-bottom: 6rem;

  .highlight {
    font-family: ${theme.font.NOTO[8]};
    display: contents;
  }

  .title-3 {
    font-family: ${theme.font.NOTO[8]};
    font-size: ${theme.font.SIZE.XXL};
    text-align: center;
    gap: 1rem;
    margin-bottom: 5rem;
  }

  .content-3 {
    padding: 0 2rem;

    .card-3 {
      background-color: ${theme.color.WHITE};
      border-radius: 1rem;
      padding: 1rem;
      margin-bottom: 4rem;
      box-shadow: 1px 1px 14px 1px lightgray;
      position: relative;

      .badge-3 {
        position: absolute;
        top: 2%;
        right: -4%;
        color: ${theme.color.WHITE};
        transform: rotate(30deg);
        font-family: ${theme.font.NOTO[7]};
        font-size: ${theme.font.SIZE.M};
        padding: 0.6rem;
      }

      .label-3 {
        font-family: ${theme.font.NOTO[7]};
        font-size: ${theme.font.SIZE.XL};
        padding: 1rem 0 1.8rem 1rem;
        border-bottom: 1px solid lightgray;
        text-align: center;
      }

      .text-3 {
        color: ${theme.color.MID_GRAY};
        font-family: ${theme.font.NOTO[4]};
        font-size: ${theme.font.SIZE.SM};
        line-height: 2rem;
        padding: 0 1rem 1rem 1rem;
        margin-top: 1.6rem;
        border-bottom: 1px solid lightgray;
      }

      .footer-3 {
        margin-top: 1.6rem;
        padding-bottom: 1rem;
        font-family: ${theme.font.NOTO[7]};
        font-size: ${theme.font.SIZE.SM};
        text-align: center;
      }
    }
  }
`;
