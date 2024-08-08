import styled from "styled-components";
import theme from "../../styles/theme";

export const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;

  #bg {
    width: 100%;
    height: 100vh;
    object-fit: cover;
    z-index: -1;
    position: absolute;
  }

  #start-btn {
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
