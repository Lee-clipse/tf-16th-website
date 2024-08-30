import styled from "styled-components";
import theme from "../../styles/theme";
import { FADEIN_ANIMATION, WEB_WIDTH } from "../../common/const";
import isMobile from "is-mobile";

export const Wrapper = styled.div`
  position: relative;
  width: ${isMobile() ? "100vw" : WEB_WIDTH};
  height: 100vh;

  #bg {
    width: 100%;
    height: 100vh;
    object-fit: cover;
    z-index: -1;
    position: absolute;
  }

  #zg-logo {
    color: ${theme.color.WHITE};
    font-family: ${theme.font.NOTO[9]};
    font-size: 5rem;
    position: absolute;
    width: 100vw;
    text-align: center;
    top: 34%;
    left: 50%;
    transform: translateX(-50%);
  }

  #start-btn {
    background-color: ${theme.color.ORANGE};
    border-radius: 0.6rem;
    padding: 1rem;
    color: ${theme.color.WHITE};
    font-family: ${theme.font.NOTO[7]};
    font-size: ${theme.font.SIZE.XXXL};
    box-shadow: 5px 0 7px rgba(0, 0, 0, 0.6);
    position: absolute;
    text-align: center;
    top: 84%;
    left: 50%;
    transform: translateX(-50%);
    width: ${isMobile() ? "90vw" : WEB_WIDTH};
  }
`;

export const Modal = styled.div`
  #back-drop {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
  }

  #m-wrapper {
    animation: ${FADEIN_ANIMATION} 0.5s ease-in-out;
    z-index: 1000;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: ${isMobile() ? "90vw" : "330px"};
    max-height: 90vh;
    overflow-y: auto;

    background: ${theme.color.WHITE};
    border-radius: 1rem;
  }

  #m-header {
    display: flex;
    flex-direction: row;
    justify-content: right;
    align-items: center;
    border-bottom: 1px solid lightgray;
    padding: 1rem;

    font-size: 1.6rem;
    font-weight: bold;

    img {
      width: 5vw;
    }
  }

  #m-body {
    font-family: ${theme.font.NOTO[5]};
    font-size: ${theme.font.SIZE.M};
    padding: 1.4rem;

    #agree {
      width: 100%;
      margin-top: 1rem;
    }

    #radio-row > label {
      font-size: ${theme.font.SIZE.SM} !important;
    }

    #radio-row > input {
      width: 1.6rem !important;
    }
  }

  #codem-body {
    font-family: ${theme.font.NOTO[5]};
    font-size: ${theme.font.SIZE.SM};
    padding: 1.4rem;

    .m-b-title {
      font-size: ${theme.font.SIZE.ML};
      font-family: ${theme.font.NOTO[7]};
      margin-bottom: 1rem;
    }

    .m-b-body {
      .h {
        color: ${theme.color.TEAL_BLUE};
        font-family: ${theme.font.NOTO[7]};
      }

      .bh {
        background-color: ${theme.color.ORANGE};
        color: ${theme.color.WHITE};
        border-radius: 0.4rem;
        padding: 0.8rem;
        line-height: 2rem;
      }
    }

    .m-b-body > div > p {
      color: ${theme.color.BLACK};
      font-size: ${theme.font.SIZE.M};
      margin-bottom: 0.4rem;
      line-height: 1.4rem;
      margin: 1.4rem 0;
    }

    .m-b-body > div > div {
      color: ${theme.color.MID_GRAY};
      margin-bottom: 0.4rem;
      line-height: 2.2rem;
    }

    .map {
      width: 100%;
      margin-bottom: 1rem;
    }

    input {
      border: 2px solid ${theme.color.BLACK};
      color: ${theme.color.BLACK};
      font-size: ${theme.font.SIZE.M};
      width: 100%;
      padding: 1rem;
      border-radius: 0.6rem;
    }

    input::placeholder {
      font-size: ${theme.font.SIZE.M};
      font-family: ${theme.font.NOTO[5]};
    }

    .m-b-button {
      color: ${theme.color.BLACK};
      font-size: ${theme.font.SIZE.M};
      border: 2px solid ${theme.color.BLACK};
      text-align: center;
      padding: 1rem;
      border-radius: 0.6rem;
    }
  }
`;
