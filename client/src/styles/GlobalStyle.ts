import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import theme from "./theme";
// import NanumSquareRoundB from "../fonts/NanumSquareRoundB.ttf";
// import NanumSquareRoundEB from "../fonts/NanumSquareRoundEB.ttf";
// import NanumSquareRoundL from "../fonts/NanumSquareRoundL.ttf";

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
    // height: 100%;
  }

  body {
    // theme.color.BACKGROUND
  }

  #root {
    display: flex;
    flex-direction: column;
    font-family: "Pretendard";	
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

  @font-face {
    font-family: 'NanumSquareRoundB';
    src: local('NanumSquareRoundB'), local('NanumSquareRoundB');
    font-style: normal;
    src: url(${""}) format('truetype')
  }
`;

export default GlobalStyle;
