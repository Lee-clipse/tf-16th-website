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
import NotoSansKRLight from "../assets/fonts/NotoSansKR-Light.ttf";
import NotoSansKRBlack from "../assets/fonts/NotoSansKR-Black.ttf";
import NotoSansKRBold from "../assets/fonts/NotoSansKR-Bold.ttf";
import NotoSansKRExtraBold from "../assets/fonts/NotoSansKR-ExtraBold.ttf";
import NotoSansKRExtraLight from "../assets/fonts/NotoSansKR-ExtraLight.ttf";
import NotoSansKRMedium from "../assets/fonts/NotoSansKR-Medium.ttf";
import NotoSansKRRegular from "../assets/fonts/NotoSansKR-Regular.ttf";
import NotoSansKRSemiBold from "../assets/fonts/NotoSansKR-SemiBold.ttf";
import NotoSansKRThin from "../assets/fonts/NotoSansKR-Thin.ttf";
import OswaldBold from "../assets/fonts/Oswald-Bold.ttf";
import OswaldExtraLight from "../assets/fonts/Oswald-ExtraLight.ttf";
import OswaldLight from "../assets/fonts/Oswald-Light.ttf";
import OswaldMedium from "../assets/fonts/Oswald-Medium.ttf";
import OswaldRegular from "../assets/fonts/Oswald-Regular.ttf";
import OswaldSemiBold from "../assets/fonts/Oswald-SemiBold.ttf";
import MainBackground from "../assets/images/main_background.jpg";

const FontStyle = `
  // 모든 영문
  @font-face {
    font-family: 'OswaldBold';
    src: local('OswaldBold'), local('OswaldBold');
    font-style: normal;
    src: url(${OswaldBold}) format('truetype');
  }

  @font-face {
    font-family: 'OswaldExtraLight';
    src: local('OswaldExtraLight'), local('OswaldExtraLight');
    font-style: normal;
    src: url(${OswaldExtraLight}) format('truetype');
  }

  @font-face {
    font-family: 'OswaldLight';
    src: local('OswaldLight'), local('OswaldLight');
    font-style: normal;
    src: url(${OswaldLight}) format('truetype');
  }

  @font-face {
    font-family: 'OswaldMedium';
    src: local('OswaldMedium'), local('OswaldMedium');
    font-style: normal;
    src: url(${OswaldMedium}) format('truetype');
  }

  @font-face {
    font-family: 'OswaldRegular';
    src: local('OswaldRegular'), local('OswaldRegular');
    font-style: normal;
    src: url(${OswaldRegular}) format('truetype');
  }

  @font-face {
    font-family: 'OswaldSemiBold';
    src: local('OswaldSemiBold'), local('OswaldSemiBold');
    font-style: normal;
    src: url(${OswaldSemiBold}) format('truetype');
  }

  // 모든 한글
  @font-face {
    font-family: 'NotoSansKRLight';
    src: local('NotoSansKRLight'), local('NotoSansKRLight');
    font-style: normal;
    src: url(${NotoSansKRLight}) format('truetype');
  }

  @font-face {
    font-family: 'NotoSansKRBlack';
    src: local('NotoSansKRBlack'), local('NotoSansKRBlack');
    font-style: normal;
    src: url(${NotoSansKRBlack}) format('truetype');
  }

   @font-face {
    font-family: 'NotoSansKRBold';
    src: local('NotoSansKRBold'), local('NotoSansKRBold');
    font-style: normal;
    src: url(${NotoSansKRBold}) format('truetype');
  }

  @font-face {
    font-family: 'NotoSansKRExtraBold';
    src: local('NotoSansKRExtraBold'), local('NotoSansKRExtraBold');
    font-style: normal;
    src: url(${NotoSansKRExtraBold}) format('truetype');
  }

   @font-face {
    font-family: 'NotoSansKRExtraLight';
    src: local('NotoSansKRExtraLight'), local('NotoSansKRExtraLight');
    font-style: normal;
    src: url(${NotoSansKRExtraLight}) format('truetype');
  }

  @font-face {
    font-family: 'NotoSansKRMedium';
    src: local('NotoSansKRMedium'), local('NotoSansKRMedium');
    font-style: normal;
    src: url(${NotoSansKRMedium}) format('truetype');
  }

  @font-face {
    font-family: 'NotoSansKRRegular';
    src: local('NotoSansKRRegular'), local('NotoSansKRRegular');
    font-style: normal;
    src: url(${NotoSansKRRegular}) format('truetype');
  }

  @font-face {
    font-family: 'NotoSansKRSemiBold';
    src: local('NotoSansKRSemiBold'), local('NotoSansKRSemiBold');
    font-style: normal;
    src: url(${NotoSansKRSemiBold}) format('truetype');
  }

  @font-face {
    font-family: 'NotoSansKRThin';
    src: local('NotoSansKRThin'), local('NotoSansKRThin');
    font-style: normal;
    src: url(${NotoSansKRThin}) format('truetype');
  }

  // 모든 영문
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

  // 메인 로고
  @font-face {
    font-family: 'HakgyoansimJiugaeR';
    src: local('HakgyoansimJiugaeR'), local('HakgyoansimJiugaeR');
    font-style: normal;
    src: url(${HakgyoansimJiugaeR}) format('truetype');
  }
`;

const CustomClass = `
  .f-row {
    display: flex;
    flex-direction: row;
  }
  
  .f-col {
    display: flex;
    flex-direction: column;
  }

  .f-spb {
    display: flex;
    justify-content: space-between;
  }

  .h-center {
    display: flex;
    text-align: center;
    justify-content: center;
  }

  .v-center {
    display: flex;
    align-items: center;
  }
`;

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${FontStyle}
  ${CustomClass}

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
    // height: 100%;
  }

  body {
  }

  #root {
    display: flex;
    flex-direction: column;
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


  // 모바일 환경을 위한 스타일
  @media (max-width: 768px) {
    html {
      width: 100%;
    }

    body, #root {
      width: 100%;
      background-image: url(${MainBackground});
    }
  }

  // 웹 환경을 위한 스타일 
  @media (min-width: 769px) {
    html {
      width: 375px;
      margin: 0 auto;
    }

    body, #root {
      width: 100%;
    }

    #root {
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1), 0 0 20px rgba(0, 0, 0, 0.1);
      background-image: url(${MainBackground});
    }
  }
`;

export default GlobalStyle;
