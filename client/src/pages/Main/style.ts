import { isMobile } from "is-mobile";
/* eslint-disable @typescript-eslint/no-explicit-any */
import styled, { keyframes } from "styled-components";
import theme from "../../styles/theme";
import { PiStarFourFill } from "react-icons/pi";
import { WEB_WIDTH } from "../../common/const";

export const Wrapper = styled.div`
  justify-content: center;

  .card {
    color: ${theme.color.WHITE};
    width: 100vw;
    overflow: hidden;
    position: relative;
    ${isMobile() ? "" : "text-align: center;"};

    img {
      width: 100%;
      max-width: ${isMobile() ? "100vw" : WEB_WIDTH};
      height: 100%;
      text-align: center;
      object-fit: cover;
    }
  }

  #card1 {
    height: 40vh;
    img {
      opacity: 0.9 !important;
    }
  }

  #card2 {
    height: 36vh;
    img {
      opacity: 1 !important;
    }
  }

  #card3 {
    height: 36vh;
    img {
      opacity: 1 !important;
    }
  }

  .c-body1 {
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 2rem;
    ${!isMobile() && "left: 50% !important; transform: translateX(-60%); text-align: left;"};

    .c-title1 {
      font-family: ${theme.font.NOTO[6]};
      font-size: ${theme.font.SIZE.XXXL};
      margin-bottom: 1.4rem;
    }

    .c-subtitle1 {
      font-family: ${theme.font.NOTO[5]};
      font-size: ${theme.font.SIZE.L};
      margin-bottom: 1.4rem;
    }

    .c-text1 {
      font-family: ${theme.font.NOTO[4]};
      font-size: ${theme.font.SIZE.M};
    }
  }

  .c-body2 {
    position: absolute;
    bottom: 0;
    right: 0;
    text-align: right;
    padding: 2rem;
    ${!isMobile() && "right: 50% !important; transform: translateX(102%);"};

    .c-title2 {
      font-family: ${theme.font.NOTO[6]};
      font-size: ${theme.font.SIZE.XXL};
      margin-bottom: 1.4rem;
    }

    .c-subtitle2 {
      font-family: ${theme.font.NOTO[5]};
      font-size: ${theme.font.SIZE.ML};
    }
  }

  .c-body3 {
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 2rem;
    ${!isMobile() && "left: 50% !important; transform: translateX(-84%); text-align: left;"};

    .c-title3 {
      font-family: ${theme.font.NOTO[6]};
      font-size: ${theme.font.SIZE.XXL};
      margin-bottom: 1.4rem;
    }

    .c-subtitle3 {
      font-family: ${theme.font.NOTO[4]};
      font-size: ${theme.font.SIZE.M};
      margin-bottom: 1.4rem;
    }

    .c-text3 {
      font-family: ${theme.font.NOTO[4]};
      font-size: ${theme.font.SIZE.M};
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
    --fcc-digit-block-width: 2.2rem; /* digit card's width */
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

  img {
    position: absolute;
    top: 0%;
    left: 0%;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

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
    font-size: ${theme.font.SIZE.L};
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

    // dot
    img {
      width: 1.4rem;
      margin-right: 0.4rem;
    }
  }
`;

// 콘텐츠
export const Section3 = styled.div`
  color: ${theme.color.BLACK};
  font-family: ${theme.font.NOTO[7]};
  font-size: ${theme.font.SIZE.L};
  padding: 6rem 0 0 0;

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
  padding: 12rem 0 10rem 0;

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
  background-color: ${theme.color.LIGHT_GRAY};

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
    margin-bottom: 3rem;
    gap: 0.6rem;
    text-align: center;
  }

  .button {
    margin: 8rem 0 0 0;
  }

  .c-card {
    padding: 0 2rem;
    margin-top: 1rem;
    text-align: center;

    .c-c-icon {
      margin-top: 5rem;
      text-align: center;
      width: 100%;

      img {
        width: ${isMobile() ? "26vw" : "8vw"};
      }
    }

    .c-c-title {
      font-family: ${theme.font.NOTO[7]};
      font-size: ${theme.font.SIZE.L};
      margin-top: 3rem;
      text-align: center;
    }

    .c-c-text {
      font-family: ${theme.font.NOTO[4]};
      font-size: ${theme.font.SIZE.SM};
      line-height: 2rem;
      margin-top: 1.6rem;
    }
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
