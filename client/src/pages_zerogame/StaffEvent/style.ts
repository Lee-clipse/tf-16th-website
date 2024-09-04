import styled from "styled-components";
import theme from "../../styles/theme";
import { FADEIN_ANIMATION } from "../../common/const";

export const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;

  #zg-bg {
    z-index: -1;
    position: absolute;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    opacity: 0.8;
  }

  #s-name {
    padding-top: 8rem;
    text-align: center;
    font-family: ${theme.font.NOTO[6]};
    font-size: ${theme.font.SIZE.M};
    color: ${theme.color.WHITE};
    margin-bottom: 1rem;
  }

  #s-people {
    #s-p-header {
      margin: 0 2rem 2rem 2rem;
      #s-p-title {
        text-align: center;
        font-family: ${theme.font.NOTO[8]};
        font-size: ${theme.font.SIZE.ML};
        color: ${theme.color.WHITE};
        color: ${theme.color.ORANGE};
      }

      #s-p-log-btn {
        background-color: ${theme.color.MID_GRAY};
        font-family: ${theme.font.NOTO[5]};
        font-size: ${theme.font.SIZE.SM};
        color: ${theme.color.WHITE};
        padding: 1rem;
        border-radius: 0.4rem;
        box-shadow: 5px 0 7px rgba(0, 0, 0, 0.6);
      }
    }

    #s-p-list {
      margin: 0 2rem;
      border: 2px solid lightgray;
      border-radius: 1rem;
      height: 46vh;
      overflow: scroll;
      margin-bottom: 1rem;
      background-color: ${theme.color.WHITE};

      .received {
        background-color: ${theme.color.GRAY};
      }

      .s-p-item {
        border-bottom: 2px solid lightgray;
        padding: 0.8rem 1.4rem;

        .s-p-name {
          font-family: ${theme.font.NOTO[6]};
          font-size: ${theme.font.SIZE.M};
        }

        .s-p-point-btn {
          background-color: ${theme.color.TEAL_BLUE};
          font-family: ${theme.font.NOTO[6]};
          color: ${theme.color.WHITE};
          padding: 0.6rem;
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

  #search-row {
    margin-bottom: 1.4rem;
    .s-row {
      margin: 0 2rem;
    }
    input {
      border: 2px solid lightgray;
      font-size: ${theme.font.SIZE.SM};
      font-family: ${theme.font.NOTO[6]};
      width: 100%;
      padding: 1rem;
      border-radius: 0.6rem;
    }
    input::placeholder {
      font-size: ${theme.font.SIZE.SM};
      font-family: ${theme.font.NOTO[6]};
      color: ${theme.color.MID_GRAY};
    }
    .s-btn {
      background-color: ${theme.color.MID_GRAY};
      width: 5rem;
      padding: 0.4rem;
      margin-left: 1rem;
      border-radius: 0.6rem;
      box-shadow: 5px 0 7px rgba(0, 0, 0, 0.6);
      img {
        width: 60%;
      }
    }
  }

  #btn-row {
    position: absolute;
    width: 100%;
    bottom: 0%;
    padding: 2rem 2rem 2rem 2rem;
    text-align: center;
  }

  #guide-btn {
    background-color: ${theme.color.GREEN};
    width: 16vw;
    height: 16vw;
    border-radius: 1rem;
    box-shadow: 5px 0 7px rgba(0, 0, 0, 0.6);

    img {
      width: 2.6rem;
    }
  }

  #booth-list-btn {
    font-size: ${theme.font.SIZE.ML};
    font-family: ${theme.font.NOTO[7]};
    color: ${theme.color.WHITE};
    background-color: ${theme.color.ORANGE};
    padding: 1rem 1.4rem;
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
      width: 2.2rem;
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
    width: 80%;
    max-height: 90vh;
    overflow-y: auto;
    box-shadow: 5px 0 7px rgba(0, 0, 0, 0.6);

    background: ${theme.color.WHITE};
    border-radius: 1rem;
  }

  #search-row {
    margin-bottom: 1.4rem;
    .s-row {
    }
    #s-input {
      border: 2px solid gray;
      font-size: ${theme.font.SIZE.SM};
      font-family: ${theme.font.NOTO[6]};
      width: 100%;
      padding: 0.6rem;
      border-radius: 0.6rem;
    }
    #s-inpu::placeholder {
      font-size: ${theme.font.SIZE.SM};
      font-family: ${theme.font.NOTO[6]};
      color: ${theme.color.MID_GRAY};
    }
    .s-btn {
      background-color: ${theme.color.MID_GRAY};
      width: 5rem;
      padding: 0.4rem;
      margin-left: 1rem;
      border-radius: 0.6rem;
      box-shadow: 3px 0 3px rgba(0, 0, 0, 0.2);
      img {
        width: 60%;
      }
    }
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

    .h {
      font-family: ${theme.font.NOTO[7]};
      color: ${theme.color.SKY_BLUE};
    }

    .r-row {
      font-family: ${theme.font.NOTO[5]};
      font-size: ${theme.font.SIZE.M};
      color: ${theme.color.MID_GRAY};
      margin-top: 1rem;
      gap: 0.8rem;
    }

    .r-title {
      margin-top: 1rem;
      font-size: ${theme.font.SIZE.M};
    }

    .r-list {
      font-family: ${theme.font.NOTO[5]};
      font-size: ${theme.font.SIZE.M};
      color: ${theme.color.MID_GRAY};
      gap: 1rem;
      margin-top: 1rem;
    }

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

    .log-row {
      font-size: ${theme.font.SIZE.M} !important;
      gap: 0.6rem;
      border-bottom: 1px solid lightgray;
      padding-bottom: 1.4rem;
      color: ${theme.color.MID_GRAY};
    }
  }
`;
