import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import theme from "./theme";
import FuturaCyrillicBold from "../assets/fonts/FuturaCyrillicBold.ttf";
import FuturaCyrillicBook from "../assets/fonts/FuturaCyrillicBook.ttf";
import FuturaCyrillicDemi from "../assets/fonts/FuturaCyrillicDemi.ttf";
import FuturaCyrillicExtraBold from "../assets/fonts/FuturaCyrillicExtraBold.ttf";
import FuturaCyrillicHeavy from "../assets/fonts/FuturaCyrillicHeavy.ttf";
import FuturaCyrillicLight from "../assets/fonts/FuturaCyrillicLight.ttf";
import FuturaCyrillicMedium from "../assets/fonts/FuturaCyrillicMedium.ttf";
import HakgyoansimJiugaeR from "../assets/fonts/HakgyoansimJiugaeR.ttf";

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    width: 100vw;
    height: 100vh;
    font-size: 80%;
  }

  body, #root {
    width: 100%;
    height: 100%;
  }

  body {
  }

  #root {
    display: flex;
    flex-direction: column;
    font-family: ${theme.font.NORMAL}, "Pretendard";
    background-color: ${theme.color.BACKGROUND};
  }

  button {
    cursor: pointer;
    background: none;
    border: none;
  }

  a {
    text-decoration: none;
  }

  .scroll::-webkit-scrollbar {
    display: none;
  }

  .scroll {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  input {
    outline: none;
    border: none;
  }

  // 폰트
  @font-face {
    font-family: 'FuturaCyrillicBold';
    src: local('FuturaCyrillicBold'), local('FuturaCyrillicBold');
    font-style: normal;
    src: url(${FuturaCyrillicBold}) format('truetype');
  }

  @font-face {
    font-family: 'FuturaCyrillicBook';
    src: local('FuturaCyrillicBook'), local('FuturaCyrillicBook');
    font-style: normal;
    src: url(${FuturaCyrillicBook}) format('truetype');
  }

  @font-face {
    font-family: 'FuturaCyrillicDemi';
    src: local('FuturaCyrillicDemi'), local('FuturaCyrillicDemi');
    font-style: normal;
    src: url(${FuturaCyrillicDemi}) format('truetype');
  }

  @font-face {
    font-family: 'FuturaCyrillicExtraBold';
    src: local('FuturaCyrillicExtraBold'), local('FuturaCyrillicExtraBold');
    font-style: normal;
    src: url(${FuturaCyrillicExtraBold}) format('truetype');
  }

  @font-face {
    font-family: 'FuturaCyrillicHeavy';
    src: local('FuturaCyrillicHeavy'), local('FuturaCyrillicHeavy');
    font-style: normal;
    src: url(${FuturaCyrillicHeavy}) format('truetype');
  }

  @font-face {
    font-family: 'FuturaCyrillicLight';
    src: local('FuturaCyrillicLight'), local('FuturaCyrillicLight');
    font-style: normal;
    src: url(${FuturaCyrillicLight}) format('truetype');
  }

  @font-face {
    font-family: 'FuturaCyrillicMedium';
    src: local('FuturaCyrillicMedium'), local('FuturaCyrillicMedium');
    font-style: normal;
    src: url(${FuturaCyrillicMedium}) format('truetype');
  }

  @font-face {
    font-family: 'HakgyoansimJiugaeR';
    src: local('HakgyoansimJiugaeR'), local('HakgyoansimJiugaeR');
    font-style: normal;
    src: url(${HakgyoansimJiugaeR}) format('truetype');
  }


  // 모바일 환경을 위한 스타일
  @media (max-width: 768px) {
    html {
      width: 100%;
    }

    body, #root {
      width: 100%;
    }
  }

  // 웹 환경을 위한 스타일 
  @media (min-width: 769px) {
    html {
      width: 375px;
      margin: 0 auto;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1), 0 0 20px rgba(0, 0, 0, 0.1);

    }

    body, #root {
      width: 100%;
    }
  }
`;

export default GlobalStyle;
