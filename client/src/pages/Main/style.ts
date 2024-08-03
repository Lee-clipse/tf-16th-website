import { isMobile } from "is-mobile";
/* eslint-disable @typescript-eslint/no-explicit-any */
import styled, { keyframes } from "styled-components";
import theme from "../../styles/theme";
import { PiStarFourFill } from "react-icons/pi";

export const Wrapper = styled.div`
  justify-content: center;

  .card {
    border-radius: 1rem;
    width: 90vw;
    height: 30vh;
    overflow: hidden;
    margin-bottom: 4rem;
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.16);
    max-width: ${() => (isMobile() ? "90vw" : "360px")};
    max-height: ${() => (isMobile() ? "30vh" : "250px")};
    position: relative;

    .card-body {
      background-color: ${theme.color.WHITE};
      padding: 1.6rem;
      position: absolute;
      bottom: 0;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 0.8;
    }

    .card-title {
      color: ${theme.color.DEEP_BLUE};
      font-family: ${theme.font.NOTO[6]};
      font-size: ${theme.font.SIZE.L};
      margin-bottom: 1rem;
    }

    .card-comment {
      color: ${theme.color.TEAL_BLUE};
      font-family: ${theme.font.NOTO[4]};
      font-size: ${theme.font.SIZE.SM};
      line-height: 1.8rem;
    }
  }
`;

export const MainSection = styled.div`
  background-color: ${theme.color.MILKY_BLUE};
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
    top: 82%;
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

export const Section0 = styled.div`
  position: relative;
  background-color: ${theme.color.WHITE};
  display: flex;
  justify-content: center;
  padding: 12rem 0 8rem 0;

  .visible {
    opacity: 1 !important;
    transform: translate(0, 0) !important;
  }

  .count-visible {
    opacity: 1 !important;
    transform: translate(-50%, -16px) !important;
  }

  .block {
    opacity: 0;
    transition: opacity 0.4s ease-in-out, transform 0.2s ease-in-out;
  }

  .late-block {
    opacity: 0;
    transition: opacity 0.6s ease-in-out, transform 0.4s ease-in-out;
  }

  .text-block {
    transform: translate(0, 20px);
  }

  .sub-title {
    color: ${theme.color.TEAL_BLUE};
    font-family: ${theme.font.NOTO[7]};
    font-size: ${theme.font.SIZE.ML};
    margin-bottom: 1.4rem;
  }

  .title {
    color: ${theme.color.BLACK};
    font-family: ${theme.font.NOTO[7]};
    font-size: ${theme.font.SIZE.XL};
    margin-bottom: 3.6rem;
    gap: 1rem;
  }
`;

export const CountDownSection = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: -5.3rem;
  left: 50%;
  transform: translate(-50%, 0);
  width: 90vw;
  border-radius: 1.4rem;
  background-color: ${theme.color.SKY_BLUE};
  padding: 2.6rem 0 2rem 0;
  max-width: ${() => (isMobile() ? "90vw" : "360px")};

  .flip-clock {
    font-family: ${theme.font.FUT[5]};
    --fcc-flip-duration: 0.5s; /* transition duration when flip card */
    --fcc-digit-block-width: 2.4rem; /* digit card's width */
    --fcc-digit-block-height: 4.6rem; /* digit card's height */
    --fcc-digit-font-size: 2.6rem; /* font size of digit */
    --fcc-digit-color: white; /* color of digit */
    --fcc-background: ${theme.color.BLACK}; /* digit card's background */
    --fcc-label-color: #black; /* time label's color */
    --fcc-divider-color: #ffffff66; /* divider's color */
  }
`;

// 문제 인식
export const Section1 = styled.div`
  padding: 8rem 1.4rem 6rem 1.4rem;
  color: ${theme.color.WHITE};
  position: relative;

  background-image: url("src/assets/images/section1_bg.webp");
  background-size: cover;

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
    margin: 4.4rem 0 0 0;
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
    margin-bottom: 5rem;
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
  background-color: ${theme.color.MILKY_BLUE};

  .sub-title {
    color: ${theme.color.TEAL_BLUE};
    font-family: ${theme.font.NOTO[9]};
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
    background-color: ${theme.color.WHITE};
    padding: 5rem 2rem 0 3rem;
    color: ${theme.color.BLACK};
  }

  .number-title {
    margin-bottom: 4rem;
  }

  .number {
    font-family: ${theme.font.OSW[6]};
    color: ${theme.color.DEEP_BLUE};
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
  padding: 8rem 2rem 6rem 2rem;
  background-color: ${theme.color.MILKY_BLUE};

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
  margin: 4rem 0 6rem 0;

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
