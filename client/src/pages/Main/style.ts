import styled from "styled-components";
import theme from "../../styles/theme";

export const Wrapper = styled.div`
  justify-content: center;
`;

export const MainSection = styled.div`
  color: ${theme.color.MAIN_BLUE};
  margin: 7rem 0 12rem 0;
  padding: 0 2rem;

  .header {
    font-family: ${theme.font.FUT[3]};
    font-size: ${theme.font.SIZE.L};
  }

  .logo {
    font-family: ${theme.font.NOTO[4]};
    font-size: ${theme.font.SIZE.M};
    margin-top: 5rem;

    img {
      width: 40%;
    }

    .logo-text {
      font-family: ${theme.font.HAK[5]};
      font-size: ${theme.font.SIZE.XXXL};
      margin: 2.4rem 0 0.6rem 0;
    }
  }

  .info {
    font-family: ${theme.font.NOTO[8]};
    font-size: ${theme.font.SIZE.M};
    margin-top: 3.6rem;
    gap: 0.8rem;
  }
`;

// 문제 인식
export const Section1 = styled.div`
  background-color: ${theme.color.MAIN_BLUE};
  padding: 8rem 2rem 6rem 2rem;
  color: ${theme.color.TEXT_WHITE};
  position: relative;

  .block {
    display: flex;
    flex-direction: column;
    opacity: 0;
    transition: opacity 1s ease-in-out;
    height: 52px;
    margin-bottom: 8rem;
  }

  .visible {
    opacity: 1;
  }

  .invisible {
    visibility: hidden;
  }

  .left-block {
    text-align: left;
  }

  .right-block {
    text-align: right;
  }

  .title {
    font-family: ${theme.font.NOTO[7]};
    font-size: ${theme.font.SIZE.XXXL};
    margin-bottom: 1rem;
  }

  .mini-title {
    font-family: ${theme.font.NOTO[4]};
    font-size: ${theme.font.SIZE.S};
  }

  .question {
    font-family: ${theme.font.NOTO[7]};
    font-size: ${theme.font.SIZE.XL};
    margin: 5rem 0 3rem 0;
  }
`;

// 비전
export const Section2 = styled.div`
  margin: 6rem 0 4rem 0;
  padding: 0 2rem 0 2.4rem;

  .button {
    margin: 3rem 0 0 0;
  }

  .title {
    color: ${theme.color.MAIN_BLUE};
    font-family: ${theme.font.NOTO[7]};
    font-size: ${theme.font.SIZE.XXXL};
    gap: 0.4rem;
    margin-bottom: 3.4rem;

    .logo {
      font-family: ${theme.font.HAK[5]};
      font-size: ${theme.font.SIZE.XXXXXL};
    }
  }

  .slogun {
    gap: 3rem;
    color: ${theme.color.TEXT_BLACK};
    font-family: ${theme.font.NOTO[5]};
    font-size: ${theme.font.SIZE.S};

    .box {
      gap: 1.4rem;

      .label {
        border-top: 2px solid ${theme.color.TEXT_BLACK};
        padding-top: 1rem;
        padding-left: 0.2rem;
        font-family: ${theme.font.NOTO[8]};
        font-size: ${theme.font.SIZE.SM};
        flex: 2;
      }

      .content {
        border-top: 1px solid ${theme.color.TEXT_BLACK};
        padding-top: 1rem;
        padding-left: 0.2rem;
        flex: 8;
        gap: 0.6rem;

        .cell {
          gap: 0.6rem;
        }

        .accent {
          font-family: ${theme.font.OSW[5]};
          font-size: ${theme.font.SIZE.L};
        }
      }
    }
  }

  .footer {
    color: ${theme.color.MAIN_BLUE};
    font-family: ${theme.font.NOTO[8]};
    font-size: ${theme.font.SIZE.L};
    align-items: end;
    margin-top: 3rem;
  }
`;

// 콘텐츠
export const Section3 = styled.div`
  color: ${theme.color.TEXT_BLACK};
  font-family: ${theme.font.NOTO[7]};
  font-size: ${theme.font.SIZE.L};
  padding: 6rem 0;

  .box {
    margin: 2rem 2rem;
    border-radius: 1rem;
    position: relative;
    height: 16rem;
    cursor: pointer;
  }

  #box-1 {
    background: rgb(14, 92, 179);
    background: linear-gradient(
      45deg,
      rgba(14, 92, 179, 0.6) 0%,
      rgba(84, 112, 230, 0.6) 51%,
      rgba(199, 129, 250, 0.6) 100%
    );
    color: ${theme.color.TEXT_WHITE};
    font-size: ${theme.font.SIZE.L};

    .title {
      position: absolute;
      top: 10%;
      left: 6%;
    }

    .sub-title {
      position: absolute;
      bottom: 10%;
      left: 6%;
    }

    .poster {
      position: absolute;
      width: 46vw;
      bottom: 0;
    }
  }

  #box-2 {
    overflow: hidden;
    color: ${theme.color.TEXT_WHITE};

    .title {
      position: absolute;
      bottom: 10%;
      right: 6%;
      z-index: 2;
    }

    .poster {
      width: 100%;
      object-fit: inherit;
      opacity: 0.8;
    }
  }

  #box-3 {
    overflow: hidden;
    color: ${theme.color.TEXT_BLACK};
    z-index: 100;

    .title {
      position: absolute;
      bottom: 10%;
      left: 6%;
      z-index: 2;
    }

    .poster {
      width: 100%;
      object-fit: inherit;
      opacity: 0.8;
    }
  }
`;

// 카운팅
export const Section4 = styled.div`
  color: ${theme.color.TEXT_BLACK};
  font-family: ${theme.font.NOTO[7]};
  font-size: ${theme.font.SIZE.XXL};
  padding: 0rem 2rem 6rem 2rem;

  .title {
    margin-bottom: 1rem;
  }

  .number {
    font-family: ${theme.font.OSW[6]};
    font-size: 5rem;
    margin-right: 0.4rem;
  }

  .visible {
    opacity: 1;
  }

  .invisible {
    visibility: hidden;
  }
`;

// 청년 커뮤니티
export const Section5 = styled.div`
  color: ${theme.color.TEXT_BLACK};
  font-family: ${theme.font.NOTO[6]};
  font-size: ${theme.font.SIZE.XL};
  padding: 2rem 2rem;

  .title {
    font-family: ${theme.font.NOTO[7]};
    font-size: ${theme.font.SIZE.XXXXL};
    margin-bottom: 4rem;
  }

  .box {
    margin: 1rem 0 3rem 0;
  }

  .label {
    margin-bottom: 1.2rem;
  }

  .text {
    color: ${theme.color.TEXT_BLACK};
    font-family: ${theme.font.NOTO[4]};
    font-size: ${theme.font.SIZE.M};
    line-height: 1.5;
  }

  .button {
    margin: 2rem 0;
  }
`;

// Youtube 임베드
export const Section6 = styled.div`
  color: ${theme.color.TEXT_BLACK};
  font-family: ${theme.font.NOTO[6]};
  font-size: ${theme.font.SIZE.L};
  padding: 2rem 2rem;

  .carousel {
    margin: 2rem 0;
  }
`;

export const BottomFloatButton = styled.div`
  z-index: 1000;
`;

export const BannerSection = styled.div`
  background-color: ${theme.color.MAIN_BLUE};
  padding: 4rem 0 8rem 0;
  text-align: center;

  .title {
    color: ${theme.color.GRAY_BLUE};
    font-family: ${theme.font.NOTO[3]};
    font-size: ${theme.font.SIZE.S};
    gap: 0.4rem;

    .logo {
      font-family: ${theme.font.HAK[5]};
      font-size: ${theme.font.SIZE.XL};
    }
  }

  .icons {
    margin-top: 1.8rem;
    gap: 1.4rem;

    .icon {
      width: 10%;
      heigth: 10%;
      cursor: pointer;
    }
  }
`;
