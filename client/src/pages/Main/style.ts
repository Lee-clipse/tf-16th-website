/* eslint-disable @typescript-eslint/no-explicit-any */
import styled, { keyframes } from "styled-components";
import theme from "../../styles/theme";
import { PiStarFourFill } from "react-icons/pi";

export const Wrapper = styled.div`
  justify-content: center;
`;

export const MainSection = styled.div`
  background-color: ${theme.color.MILKY_BLUE};
  margin: 0 0 10rem 0;
  height: 100vh;
  padding-top: 40vh;
  position: relative;

  #main-title {
    font-family: ${theme.font.HAK[5]};
    color: ${theme.color.DEEP_BLUE};
    font-size: 5.2rem;
  }

  #main-info {
    font-size: ${theme.font.SIZE.XL};
    font-family: ${theme.font.NOTO[6]};
    margin-top: 2rem;
    gap: 1rem;
  }

  .tickle {
    position: absolute;
  }

  .t-01 {
    top: 20%;
    left: 10%;
  }
  .t-02 {
    top: 12%;
    left: 80%;
  }
  .t-03 {
    top: 80%;
    left: 50%;
  }
  .t-04 {
    top: 70%;
    left: 80%;
  }
  .t-05 {
    top: 66%;
    left: 74%;
  }
  .t-06 {
    top: 70%;
    left: 20%;
  }
  .t-07 {
    top: 29%;
    left: 80%;
  }
  .t-08 {
    top: 25%;
    left: 18%;
  }
  .t-09 {
    top: 90%;
    left: 18%;
  }
`;

const twinkle = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.2;
  }
`;

export const Partickle = styled(PiStarFourFill)<{
  size: string;
  duration: number;
  delay: number;
}>`
  position: absolute;
  animation: ${twinkle} ${({ duration }) => duration}s ${({ delay }) => delay}s infinite;
`;

export const CountDownSection = styled.div`
  width: 100%;
  padding: 0 0 10rem 0;
  display: flex;
  justify-content: center;

  .flip-clock {
    font-family: ${theme.font.FUT[5]};
    --fcc-flip-duration: 0.5s; /* transition duration when flip card */
    --fcc-digit-block-width: 2.6rem; /* digit card's width */
    --fcc-digit-block-height: 5rem; /* digit card's height */
    --fcc-digit-font-size: 40px; /* font size of digit */
    --fcc-digit-color: white; /* color of digit */
    --fcc-background: ${theme.color.DEEP_BLUE}; /* digit card's background */
    --fcc-label-color: #black; /* time label's color */
    --fcc-divider-color: #ffffff66; /* divider's color */
  }
`;

// 문제 인식
export const Section1 = styled.div`
  background-color: ${theme.color.DEEP_BLUE};
  padding: 8rem 1.4rem 6rem 1.4rem;
  color: ${theme.color.WHITE};
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
    margin-bottom: 1.6rem;
  }

  .mini-title {
    font-family: ${theme.font.NOTO[4]};
    font-size: ${theme.font.SIZE.M};
    margin-bottom: 0.4rem;
  }

  .question {
    font-family: ${theme.font.NOTO[7]};
    font-size: ${theme.font.SIZE.XL};
    margin: 5rem 0 3rem 0;
  }
`;

// 비전
export const Section2 = styled.div`
  margin: 10rem 0 10rem 0;
  padding: 0 2rem 0 2.4rem;
  text-align: center;

  .button {
    margin: 3rem 0 0 0;
  }

  .sub-title {
    color: ${theme.color.TEAL_BLUE};
    font-family: ${theme.font.NOTO[7]};
    font-size: ${theme.font.SIZE.ML};
    margin-bottom: 1rem;
  }

  .title {
    color: ${theme.color.BLACK};
    font-family: ${theme.font.NOTO[7]};
    font-size: ${theme.font.SIZE.XL};
    margin-bottom: 3.6rem;
    gap: 0.6rem;
  }

  .section {
    text-align: left;
    color: ${theme.color.BLACK};
    font-family: ${theme.font.NOTO[5]};
    font-size: ${theme.font.SIZE.M};
    line-height: 2.4rem;
    gap: 1.6rem;

    .dot {
      color: ${theme.color.TEAL_BLUE};
      padding-top: 0.3rem;
    }
  }
`;

// 콘텐츠
export const Section3 = styled.div`
  color: ${theme.color.BLACK};
  font-family: ${theme.font.NOTO[7]};
  font-size: ${theme.font.SIZE.L};
  padding: 6rem 0;

  .sub-title {
    color: ${theme.color.TEAL_BLUE};
    font-family: ${theme.font.NOTO[7]};
    font-size: ${theme.font.SIZE.ML};
    margin-bottom: 1rem;
    text-align: center;
  }

  .title {
    color: ${theme.color.BLACK};
    font-family: ${theme.font.NOTO[7]};
    font-size: ${theme.font.SIZE.XL};
    margin-bottom: 6rem;
    gap: 0.6rem;
    text-align: center;
  }

  .box-title {
    margin: 0 0 0.6rem 2rem;
    text-align: left;
    color: ${theme.color.BLACK};
    font-family: ${theme.font.NOTO[7]};
    font-size: ${theme.font.SIZE.L};
  }

  .box-sub-title {
    margin: 0 0 0.6rem 2rem;
    text-align: left;
    color: ${theme.color.BLACK};
    font-family: ${theme.font.NOTO[7]};
    font-size: ${theme.font.SIZE.M};
  }

  .box {
    margin: 0.4rem 2rem 3rem 2rem;
    border-radius: 1rem;
    position: relative;
    height: 16rem;
    cursor: pointer;
  }

  #box-1 {
    color: ${theme.color.WHITE};
    font-size: ${theme.font.SIZE.L};

    .title {
      position: absolute;
      top: 10%;
      left: 6%;
      z-index: 5;
    }

    .poster {
      position: absolute;
      width: 46vw;
      max-width: 14rem;
      bottom: -2%;
      right: 0;
      z-index: 2;
      opacity: 0.9;
    }

    .poster-bg {
      width: 100%;
      object-fit: inherit;
      opacity: 0.8;
      border-radius: 1rem;
    }
  }

  #box-2 {
    overflow: hidden;
    color: ${theme.color.WHITE};

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
    color: ${theme.color.BLACK};
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
  color: ${theme.color.BLACK};
  font-family: ${theme.font.NOTO[7]};
  font-size: ${theme.font.SIZE.XXL};
  padding: 8rem 0 10rem 0;

  .sub-title {
    color: ${theme.color.TEAL_BLUE};
    font-family: ${theme.font.NOTO[7]};
    font-size: ${theme.font.SIZE.ML};
    margin-bottom: 1rem;
    text-align: center;
  }

  .title {
    color: ${theme.color.BLACK};
    font-family: ${theme.font.NOTO[7]};
    font-size: ${theme.font.SIZE.XL};
    margin-bottom: 4rem;
    gap: 0.6rem;
    text-align: center;
  }

  .section4-box {
    background-color: ${theme.color.DEEP_BLUE};
    padding: 5rem 2rem 0 3rem;
    color: ${theme.color.WHITE};
  }

  .number-title {
    margin-bottom: 4rem;
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
  color: ${theme.color.BLACK};
  font-family: ${theme.font.NOTO[6]};
  font-size: ${theme.font.SIZE.XL};
  padding: 2rem 2rem;

  .sub-title {
    color: ${theme.color.TEAL_BLUE};
    font-family: ${theme.font.NOTO[7]};
    font-size: ${theme.font.SIZE.ML};
    margin-bottom: 1rem;
    text-align: center;
  }

  .title {
    color: ${theme.color.BLACK};
    font-family: ${theme.font.NOTO[7]};
    font-size: ${theme.font.SIZE.XL};
    margin-bottom: 6rem;
    gap: 0.6rem;
    text-align: center;
  }

  .box {
    margin: 1rem 0 3rem 0;
  }

  .label {
    margin-bottom: 1.2rem;
  }

  .hashtag {
    color: ${theme.color.TEAL_BLUE};
    font-family: ${theme.font.NOTO[8]};
    font-size: ${theme.font.SIZE.SM};
    margin-bottom: 0.8rem;
    word-spacing: 0.6rem;
  }

  .text {
    color: ${theme.color.BLACK};
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
  color: ${theme.color.BLACK};
  font-family: ${theme.font.NOTO[6]};
  font-size: ${theme.font.SIZE.L};
  padding: 2rem 2rem;
  margin: 8rem 0 8rem 0;

  .sub-title {
    color: ${theme.color.TEAL_BLUE};
    font-family: ${theme.font.NOTO[7]};
    font-size: ${theme.font.SIZE.ML};
    margin-bottom: 1rem;
    text-align: center;
  }

  .title {
    color: ${theme.color.BLACK};
    font-family: ${theme.font.NOTO[7]};
    font-size: ${theme.font.SIZE.XL};
    margin-bottom: 4rem;
    gap: 0.6rem;
    text-align: center;
  }

  .carousel {
    margin: 2rem 0;
  }
`;

export const BottomFloatButton = styled.div`
  z-index: 100;
`;

export const BannerSection = styled.div`
  background-color: ${theme.color.DEEP_BLUE};
  padding: 4rem 0 12rem 0;
  text-align: center;

  .title {
    color: ${theme.color.WHITE};
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
