import styled from "styled-components";
import theme from "../styles/theme";

const Loading = () => {
  return (
    <LoadingOverlay>
      <span className="loader"></span>
    </LoadingOverlay>
  );
};

const LoadingOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.5em;
  z-index: 9999;
  opacity: 0;
  animation: fadeIn 3s forwards;

  .loader {
    width: 48px;
    height: 48px;
    border: 7px solid ${theme.color.MID_GRAY};
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }
`;

export default Loading;
