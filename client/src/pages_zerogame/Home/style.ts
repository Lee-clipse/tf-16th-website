import styled, { keyframes } from "styled-components";
import theme from "../../styles/theme";
import { FADEIN_ANIMATION } from "../../common/const";

export const MonsterFloatAnimation = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }
`;

export const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  font-family: ${theme.font.NOTO[5]};
  font-size: ${theme.font.SIZE.M};

  #zg-bg {
    z-index: -1;
    position: absolute;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    opacity: 0.8;
  }

  #h-header {
    padding: 1.4rem 1.4rem;

    #point {
      color: ${theme.color.WHITE};
      font-size: 2rem;
      #number {
        font-family: ${theme.font.OSW[6]};
        font-size: 2rem;
      }
    }

    #home-btn {
      img {
        width: 6vw;
      }
    }
  }

  #monster {
    text-align: center;
    margin: 1rem 0 4rem 0;
    position: relative;

    img {
      width: 60%;
      animation: ${MonsterFloatAnimation} 2s ease-in-out infinite;
    }

    #clear-bg {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 100%;
      padding: 1rem 0;
      background-color: ${theme.color.BLACK};
      opacity: 0.8;
      color: ${theme.color.WHITE};
      font-family: ${theme.font.NOTO[8]};
      font-size: ${theme.font.SIZE.L};
    }

    #attack-btn {
      position: absolute;
      left: 50%;
      bottom: 10%;
      transform: translateX(-50%);
      font-family: ${theme.font.NOTO[6]};
      font-size: ${theme.font.SIZE.ML};
      color: ${theme.color.WHITE};
      background-color: ${theme.color.ORANGE};
      padding: 1rem 1.4rem;
      border-radius: 0.6rem;
    }

    #goods-btn {
      position: absolute;
      left: 50%;
      bottom: 10%;
      transform: translateX(-50%);
      font-family: ${theme.font.NOTO[6]};
      font-size: ${theme.font.SIZE.ML};
      color: ${theme.color.WHITE};
      background-color: ${theme.color.PURPLE};
      padding: 1rem 1.4rem;
      border-radius: 0.6rem;
    }
  }

  #grit-btn {
    text-align: center;
    width: 40%;
    padding: 0.6rem;
    font-family: ${theme.font.NOTO[6]};
    font-size: ${theme.font.SIZE.M};
    color: ${theme.color.WHITE};
    background-color: ${theme.color.PURPLE};
    border-radius: 0.6rem;
  }

  #booth-map-box {
    text-align: center;
    margin: 1rem 0;
    width: 96vw;
    margin: 0 auto;
    background: ${theme.color.WHITE};
    border-radius: 1rem;
    padding: 1rem;
    box-shadow: 5px 0 7px rgba(0, 0, 0, 0.6);

    .b-m-title {
      font-family: ${theme.font.NOTO[7]};
      font-size: ${theme.font.SIZE.M};
      margin-bottom: 1rem;
    }

    .stone {
      width: 74%;
      padding: 0.4rem;
      border-radius: 1rem;
      border: 2px solid lightgray;
      margin-bottom: 0.6rem;
    }

    .b-m-score {
      font-family: ${theme.font.NOTO[7]};
      font-size: ${theme.font.SIZE.ML};
    }
  }

  #booth-waiting {
    text-align: center;
    margin: 2rem 0;
    background-color: ${theme.color.WHITE};
    font-size: ${theme.font.SIZE.ML};
    font-family: ${theme.font.NOTO[7]};
    color: ${theme.color.MID_GRAY};
    box-shadow: 0px 0 20px rgba(0, 0, 0, 1);

    .next-alert {
      font-size: ${theme.font.SIZE.ML};
      color: ${theme.color.MID_GRAY};
      background-color: ${theme.color.WHITE};
      padding: 1.4rem 1rem;
      line-height: 2rem;
      width: 100%;

      span {
        color: ${theme.color.ORANGE};
      }
    }
  }

  #clear-btn {
    font-size: ${theme.font.SIZE.XL};
    color: ${theme.color.WHITE};
    background-color: ${theme.color.ORANGE};
    padding: 1rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  #btn-row {
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
    padding: 1rem 2rem;
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

export const ImageContainer = styled.div<{ currentIndex: number }>`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: translateX(${(props) => -props.currentIndex * 100}%);
  margin: 1rem 0;

  img {
    width: 100%;
    height: 100%;
    padding: 1rem;
  }
`;

export const ArrowButton = styled.button<{ direction: string }>`
  ${(props) => (props.direction === "left" ? "left: 6px;" : "right: 6px;")}
  border: none;
  cursor: pointer;
  z-index: 10;
  img {
    width: 2rem;
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

  .scroll::-webkit-scrollbar {
    display: none;
  }

  #p-index {
    font-family: ${theme.font.NOTO[6]};
    font-size: ${theme.font.SIZE.ML};
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
    background-color: ${theme.color.WHITE};

    border-radius: 1rem;

    &::-webkit-scrollbar {
      display: none;
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
    padding: 1.4rem;

    #m-b-title {
      margin: 0 0 1rem 0;
      font-family: ${theme.font.NOTO[6]};
      font-size: ${theme.font.SIZE.ML};
    }

    #g-img {
      margin: 1rem 0;
      width: 100%;
      position: relative;
      overflow: hidden;

      img {
        width: 100%;
      }

      img::active {
      }
    }

    #g-scroll {
      text-align: center;

      #g-page {
        font-family: ${theme.font.NOTO[8]};
        font-size: ${theme.font.SIZE.ML};
      }

      img {
        width: 7vw;
      }
    }
  }
`;
