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
    font-family: ${theme.font.NOTO[9]};
    font-size: ${theme.font.SIZE.XXXL};
    color: ${theme.color.ORANGE};
    padding: 1.6rem 0;
  }

  #home-btn {
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
