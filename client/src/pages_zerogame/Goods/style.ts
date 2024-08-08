import styled from "styled-components";
import theme from "../../styles/theme";

export const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  padding: 3rem 2rem;
  font-family: ${theme.font.NOTO[5]};
  font-size: ${theme.font.SIZE.ML};

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
  }
`;
