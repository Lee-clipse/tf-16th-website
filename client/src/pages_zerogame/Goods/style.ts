import styled from "styled-components";
import theme from "../../styles/theme";
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

  #g-map {
    text-align: center;
    margin: 2rem 0;
    img {
      width: 80%;
    }
  }

  #g-list {
    text-align: center;
    margin: 2rem 0;
    img {
      width: 80%;
    }
  }

  #g-text {
    text-align: center;
    background-color: ${theme.color.WHITE};
    font-family: ${theme.font.NOTO[7]};
    font-size: ${theme.font.SIZE.M};
    color: ${theme.color.ORANGE};
    padding: 1.6rem 0;
  }

  #btn-row {
    padding: 2rem 2rem 2rem 2rem;
    position: absolute;
    text-align: center;
    top: 76%;
    width: 100%;
    color: ${theme.color.WHITE};
    font-family: ${theme.font.NOTO[6]};
    font-size: ${theme.font.SIZE.ML};

    #map-btn {
      background-color: ${theme.color.GREEN};
      border-radius: 0.6rem;
      box-shadow: 5px 0 7px rgba(0, 0, 0, 0.6);
      padding: 1rem;

      img {
        width: 1.6rem;
        margin-left: 1rem;
      }
    }

    #home-btn {
      background-color: ${theme.color.ORANGE};
      border-radius: 0.6rem;
      padding: 1rem;

      box-shadow: 5px 0 7px rgba(0, 0, 0, 0.6);
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

  #location-map {
    width: 100%;
    height: 100%;
  }

  #m-wrapper {
    animation: ${FADEIN_ANIMATION} 0.5s ease-in-out;
    z-index: 1000;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    max-height: 90vh;
    overflow-y: auto;
    box-shadow: 5px 0 7px rgba(0, 0, 0, 0.6);

    background: ${theme.color.LIGHT_GRAY};
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
    padding: 1.4rem;

    #m-b-title {
      margin: 0 0 1rem 0;
      font-family: ${theme.font.NOTO[6]};
      font-size: ${theme.font.SIZE.ML};
    }
  }
`;
