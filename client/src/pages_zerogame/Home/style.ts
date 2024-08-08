import styled from "styled-components";
import theme from "../../styles/theme";

export const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  padding: 3rem 2rem;
  font-family: ${theme.font.NOTO[5]};
  font-size: ${theme.font.SIZE.ML};

  #h-header {
    #point {
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
  }

  #btn-row {
    text-align: center;
  }

  #map-btn {
    border: 3px solid ${theme.color.BLACK};
    font-size: ${theme.font.SIZE.ML};
    width: 16vw;
    height: 16vw;
    border-radius: 1rem;
  }

  #booth-list-btn {
    border: 3px solid ${theme.color.BLACK};
    font-size: ${theme.font.SIZE.ML};
    width: 44vw;
    height: 16vw;
    border-radius: 1rem;
  }

  #refresh-btn {
    background-color: ${theme.color.MINT};
    width: 16vw;
    height: 16vw;
    border-radius: 50%;

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

  #m-wrapper {
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
    padding: 1rem;
  }
`;
