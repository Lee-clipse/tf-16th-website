import styled, { keyframes } from "styled-components";
import theme from "../../styles/theme";
import { MonsterFloatAnimation } from "../Home/style";
import { FADEIN_ANIMATION } from "../../common/const";

const blinkAnimation = keyframes`
  0%, 100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
`;

export const Wrapper = styled.div<{ isHitVisible: boolean }>`
  position: relative;
  width: 100vw;
  height: 100vh;
  font-family: ${theme.font.NOTO[5]};
  font-size: ${theme.font.SIZE.ML};

  #zg-bg {
    z-index: -1;
    position: absolute;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    opacity: 0.8;
  }

  #monster {
    position: relative;
    text-align: center;
    margin: 5rem 0;

    #hit {
      position: absolute;
      display: ${(props) => (props.isHitVisible ? "block" : "none")};
      top: 30%;
      left: 24%;
      z-index: 4;
      width: 62%;
      animation: ${blinkAnimation} 0.3s ease-in-out;

      #damage-num {
        font-size: 6rem;
        font-family: ${theme.font.OSW[5]};
        color: ${theme.color.WHITE};
      }

      img {
        width: 100%;
      }
    }

    #m-hp-bar {
      border: 4px solid ${theme.color.WHITE};
      border-radius: 0.4rem;
      height: 3rem;
      width: 90vw;
      margin: 0 auto;
      margin-bottom: 1rem;

      #m-hp {
        background-color: ${theme.color.ORANGE};
      }
    }

    #m-hp-num {
      font-size: ${theme.font.SIZE.XXXXL};
      color: ${theme.color.WHITE};
      margin-bottom: 4rem;
    }

    img {
      width: 90%;
      animation: ${MonsterFloatAnimation} 2s ease-in-out infinite;
    }
  }

  #a-box {
    text-align: center;
    position: absolute;
    top: 66%;
    left: 50%;
    transform: translateX(-50%);
    justify-contnet: center;

    #msg {
      background-color: ${theme.color.WHITE};
      width: 100vw;
      padding: 1rem;
      line-height: 2rem;
    }

    #clear-msg {
      background-color: ${theme.color.BLACK};
      color: ${theme.color.WHITE};
      opacity: 0.8;
      width: 100vw;
      padding: 1rem;
      line-height: 2rem;
    }

    #a-img-box {
      text-align: center;

      #img-line {
        outline: 4px solid black;
        width: 42%;
      }

      img {
        width: 100%;
      }
    }

    #damage {
      color: ${theme.color.BLACK};
      font-family: ${theme.font.NOTO[6]};
      font-size: ${theme.font.SIZE.XL};
    }

    #a-btn {
      background-color: ${theme.color.ORANGE};
      border-radius: 0.6rem;
      padding: 0.8rem;
      color: ${theme.color.WHITE};
      font-family: ${theme.font.NOTO[6]};
      font-size: ${theme.font.SIZE.XL};
      box-shadow: 5px 0 7px rgba(0, 0, 0, 0.6);
      width: 60% !important;
      text-align: center;
    }
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
    width: 80%;
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
    font-size: ${theme.font.SIZE.ML};
    padding: 1rem;

    .b-btn {
      border: 2px solid ${theme.color.BLACK};
      text-align: center;
      padding: 1rem;
      border-radius: 1rem;
    }
  }
`;
