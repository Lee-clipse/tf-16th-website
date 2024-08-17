import styled from "styled-components";
import theme from "../../styles/theme";
import { FADEIN_ANIMATION } from "../../common/const";

export const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  font-family: ${theme.font.NOTO[5]};
  font-size: ${theme.font.SIZE.ML};

  #b-title {
    font-size: ${theme.font.SIZE.XXXXL};
    font-family: ${theme.font.NOTO[9]};
    text-align: center;
    color: ${theme.color.WHITE};
    margin: 6rem 0 4rem 0;
  }

  #zg-bg {
    z-index: -1;
    position: absolute;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    opacity: 0.8;
  }

  #b-list {
    margin: 0 2rem;
    height: 70vh;
    overflow: scroll;
    border: 2px solid lightgray;
    border-radius: 1rem;
    background-color: ${theme.color.WHITE};
    box-shadow: 5px 0 7px rgba(0, 0, 0, 0.6);

    .b {
      border-bottom: 1px solid lightgray;
      padding: 2rem;
    }

    .cleard {
      background-color: ${theme.color.GRAY};
    }

    .dr {
      .dr-item {
        padding: 1rem 1.4rem 1rem 1.4rem;
        font-family: ${theme.font.NOTO[6]};
        font-size: ${theme.font.SIZE.M};
        border-bottom: 1px solid lightgray;

        img {
          width: 1.4rem;
        }

        .wait {
          font-family: ${theme.font.NOTO[6]};
          font-size: ${theme.font.SIZE.SM};
          color: ${theme.color.MID_GRAY};
        }
      }

      .dr-row {
        padding: 1.4rem;
        .dr-label {
          .dr-icon {
            width: 2.6rem;
            margin-right: 1rem;
          }
          .dr-title {
            font-family: ${theme.font.NOTO[7]};
            font-size: ${theme.font.SIZE.ML};
          }
        }

        .dr-btn {
          font-size: ${theme.font.SIZE.SM};
          color: ${theme.color.MID_GRAY};
        }
      }
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
    padding: 1.4rem;
    gap: 1.4rem;

    .m-title {
      font-family: ${theme.font.NOTO[6]};
    }

    .m-desc {
      font-size: ${theme.font.SIZE.M};
      font-family: ${theme.font.NOTO[6]};
      color: ${theme.color.MID_GRAY};
    }

    .b-btn {
      border: 2px solid ${theme.color.BLACK};
      text-align: center;
      padding: 1rem;
      border-radius: 1rem;
    }
  }
`;

export const LoadingPage = styled.div`
  #background {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: ${theme.color.SKY_BLUE};
    z-index: 1999;
    color: ${theme.color.WHITE};
    animation: ${FADEIN_ANIMATION} 0.3s ease-in-out;

    img {
      width: 50vw;
    }

    .l-title {
      font-size: ${theme.font.SIZE.XXXXXL};
      font-family: ${theme.font.NOTO[8]};
    }

    .l-desc-box {
      font-size: ${theme.font.SIZE.XXL};
      font-family: ${theme.font.NOTO[7]};

      .l-desc {
        width: 80vw;
        font-size: ${theme.font.SIZE.L};
        font-family: ${theme.font.NOTO[5]};
        line-height: 2.6rem;
      }
    }
  }
`;
