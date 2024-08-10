import styled from "styled-components";
import theme from "../../styles/theme";

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

  #h-header {
    padding: 2rem 2rem;

    #point {
      color: ${theme.color.WHITE};
      font-size: 3rem;
      #number {
        font-family: ${theme.font.OSW[6]};
        font-size: 3rem;
      }
    }

    #home-btn {
      img {
        width: 10vw;
      }
    }
  }

  #monster {
    text-align: center;
    margin: 2rem 0;
    img {
      width: 50%;
    }
  }

  #clear-booth {
    text-align: center;
    margin: 2rem 0;
  }

  #booth-waiting {
    text-align: center;
    margin: 2rem 0;
    background-color: ${theme.color.WHITE};
    font-size: ${theme.font.SIZE.XXL};
    font-family: ${theme.font.NOTO[8]};
    color: ${theme.color.MID_GRAY};
    padding: 1.6rem 0;
    box-shadow: 0px 0 20px rgba(0, 0, 0, 1);
  }

  #clear-btn {
    border: 3px solid ${theme.color.ORANGE};
    font-size: ${theme.font.SIZE.ML};
    color: ${theme.color.ORANGE};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    border-radius: 1rem;
    padding: 1rem;
  }

  #btn-row {
    padding: 2rem 2rem;
    text-align: center;
  }

  #map-btn {
    background-color: ${theme.color.GREEN};
    width: 16vw;
    height: 16vw;
    border-radius: 1rem;
    box-shadow: 5px 0 7px rgba(0, 0, 0, 0.6);

    img {
      width: 3rem;
    }
  }

  #booth-list-btn {
    font-size: ${theme.font.SIZE.L};
    font-family: ${theme.font.NOTO[9]};
    color: ${theme.color.WHITE};
    background-color: ${theme.color.ORANGE};
    width: 44vw;
    height: 16vw;
    border-radius: 1rem;
    box-shadow: 5px 0 7px rgba(0, 0, 0, 0.6);
  }

  #refresh-btn {
    background-color: ${theme.color.GREEN};
    width: 16vw;
    height: 16vw;
    border-radius: 50%;
    box-shadow: 5px 0 7px rgba(0, 0, 0, 0.6);

    img {
      width: 2.6rem;
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
