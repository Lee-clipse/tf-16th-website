import styled from "styled-components";
import theme from "../../styles/theme";

export const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  font-family: ${theme.font.NOTO[5]};
  font-size: ${theme.font.SIZE.ML};
  margin-top: 7rem;

  #zg-bg {
    z-index: -1;
    position: absolute;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    opacity: 0.8;
  }

  #s-name {
    text-align: center;
    font-family: ${theme.font.NOTO[7]};
    font-size: ${theme.font.SIZE.XL};
    margin-bottom: 1rem;
  }

  #s-booth-name {
    text-align: center;
    font-family: ${theme.font.NOTO[7]};
    font-size: ${theme.font.SIZE.XXXXL};
    color: ${theme.color.SKY_BLUE};
    margin-bottom: 3rem;
  }

  #s-people {
    #s-p-title {
      text-align: center;
      font-family: ${theme.font.NOTO[5]};
      font-size: ${theme.font.SIZE.XL};
      margin-bottom: 1rem;
    }

    #s-p-list {
      margin: 0 2rem;
      border: 2px solid lightgray;
      border-radius: 1rem;
      height: 52vh;
      overflow: scroll;
      margin-bottom: 3rem;

      .s-p-item {
        border-bottom: 2px solid lightgray;
        padding: 1rem 2rem;

        .s-p-name {
        }

        .s-p-point-btn {
          background-color: ${theme.color.TEAL_BLUE};
          font-family: ${theme.font.NOTO[7]};
          color: ${theme.color.WHITE};
          padding: 0.8rem;
          border-radius: 0.6rem;
          font-size: ${theme.font.SIZE.M};
          box-shadow: 2px 0 2px rgba(0, 0, 0, 0.3);
        }

        .s-p-out-btn {
          margin-left: 1rem;
          font-family: ${theme.font.NOTO[7]};
          font-size: ${theme.font.SIZE.SM};
          color: ${theme.color.MID_GRAY};
          text-decoration: underline;
        }
      }
    }
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
    width: 80%;
    max-height: 90vh;
    overflow-y: auto;
    box-shadow: 5px 0 7px rgba(0, 0, 0, 0.6);

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
    padding: 1.4rem;

    #m-b-title {
      margin: 0 0 1rem 0;
      font-family: ${theme.font.NOTO[6]};
      font-size: ${theme.font.SIZE.ML};
    }

    .b-btn {
      border: 2px solid ${theme.color.BLACK};
      text-align: center;
      padding: 1rem;
      border-radius: 0.6rem;
    }

    input {
      border: 2px solid ${theme.color.BLACK};
      font-size: ${theme.font.SIZE.ML};
      width: 100%;
      padding: 1rem;
      border-radius: 0.6rem;
    }
  }
`;
