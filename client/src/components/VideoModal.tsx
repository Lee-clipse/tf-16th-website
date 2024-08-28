/* eslint-disable @typescript-eslint/no-explicit-any */
import theme from "../styles/theme";
import { FADEIN_ANIMATION, WEB_WIDTH } from "../common/const";
import styled from "styled-components";
import CloseIcon from "../assets/icons/close.png";
import isMobile from "is-mobile";
import Video from "../assets/video/pop_video.mp4";

const VideoModal = ({ viewModal }: any) => {
  return (
    <Modal>
      <div id="back-drop" onClick={() => viewModal(false)}></div>
      <div id="m-wrapper">
        <div id="m-header">
          <img id="m-close" src={CloseIcon} onClick={() => viewModal(false)} />
        </div>
        <div id="m-body">
          <video autoPlay loop>
            <source src={Video} type="video/mp4" />
          </video>
        </div>
      </div>
    </Modal>
  );
};

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
    width: ${isMobile() ? "90%" : WEB_WIDTH};
    max-height: 90vh;
    overflow-y: auto;
    padding: 1rem;

    background: ${theme.color.WHITE};
    border-radius: 1rem;
  }

  #m-header {
    text-align: right;
    margin-bottom: 1rem;

    #m-close {
      width: 2rem;
    }
  }

  #m-body {
    video {
      width: ${isMobile() ? "100%" : WEB_WIDTH};
      border-radius: 0.4rem;
    }
  }
`;

export default VideoModal;
