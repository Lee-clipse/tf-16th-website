import styled from "styled-components";
import theme from "../../styles/theme";
import { MonsterFloatAnimation } from "../Home/style";
import { FADEIN_ANIMATION } from "../../common/const";

export const Wrapper = styled.div`
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
    text-align: center;
    margin: 5rem 0;

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
      width: 100%;
      animation: ${MonsterFloatAnimation} 2s ease-in-out infinite;
    }
  }

  #attack-btn {
    background-color: ${theme.color.ORANGE};
    border-radius: 0.6rem;
    padding: 1rem;
    color: ${theme.color.WHITE};
    font-family: ${theme.font.NOTO[7]};
    font-size: ${theme.font.SIZE.XXXL};
    position: absolute;
    text-align: center;
    top: 86%;
    left: 50%;
    transform: translateX(-50%);
    width: 90vw;
    box-shadow: 5px 0 7px rgba(0, 0, 0, 0.6);
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
