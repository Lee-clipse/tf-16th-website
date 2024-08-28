/* eslint-disable @typescript-eslint/no-explicit-any */
import { Key, useEffect, useState } from "react";
import styled from "styled-components";
import theme from "../styles/theme";
import { setPopupToken, verifyByPopupToken } from "../common/common";
import { useSwipeable } from "react-swipeable";
import LeftArrow from "../assets/icons/left-arrow-black.png";
import RightArrow from "../assets/icons/right-arrow-black.png";
import { FADEIN_ANIMATION, WEB_WIDTH } from "../common/const";
import isMobile from "is-mobile";

const PopupModal = ({ viewPopup, isClickable, imageList, tokenName }: any) => {
  const [isPopupValid, setIsPopupValid] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const length: number = imageList.length;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + length) % length);
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    trackMouse: true,
  });

  useEffect(() => {
    // 이벤트 버튼 클릭 진입시 무조건 렌더링
    if (isClickable) return;

    setIsPopupValid(verifyByPopupToken(tokenName));
  }, []);

  const handleClosePopup = () => {
    viewPopup(false);
    // 현 시점 + 24시간 만료
    setPopupToken(tokenName);
  };

  return (
    <>
      {!isPopupValid && (
        <Wrapper>
          <div id="back-drop"></div>
          <div id="m-wrapper">
            <div id="m-body">
              <div>
                <ImageContainer className="popup" {...handlers} currentIndex={currentIndex}>
                  {imageList.map((image: string, index: Key) => (
                    <img key={index} src={image} alt={`Slide ${index}`} />
                  ))}
                </ImageContainer>
                <ArrowButton onClick={handlePrev} direction="left">
                  <img src={LeftArrow} />
                </ArrowButton>
                <ArrowButton onClick={handleNext} direction="right">
                  <img src={RightArrow} />
                </ArrowButton>
              </div>

              <div className="p-row f-row" style={{ gap: "1.4rem" }}>
                <div onClick={() => handleClosePopup()}>하루 동안 보지 않기</div>
                <div onClick={() => viewPopup(false)}>닫기</div>
              </div>
            </div>
          </div>
        </Wrapper>
      )}
    </>
  );
};

const ImageContainer = styled.div<{ currentIndex: number }>`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: translateX(${(props) => -props.currentIndex * 100}%);

  img {
    width: 100%;
    height: 100%;
  }
`;

const ArrowButton = styled.button<{ direction: string }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${(props) => (props.direction === "left" ? "left: 6px;" : "right: 6px;")}
  border: none;
  cursor: pointer;
  border-radius: 50%;
  z-index: 10;
  img {
    width: 3rem;
  }
`;

const Wrapper = styled.div`
  #back-drop {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
  }

  .p-row {
    padding: 1rem;
    justify-content: right;
    text-decoration: underline;
    color: ${theme.color.MID_GRAY};
  }

  #m-wrapper {
    animation: ${FADEIN_ANIMATION} 0.5s ease-in-out;
    z-index: 1000;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: ${isMobile() ? "90vw" : WEB_WIDTH};
    max-height: 90vh;
    box-shadow: 5px 0 7px rgba(0, 0, 0, 0.6);
    overflow: hidden;

    background: ${theme.color.LIGHT_GRAY};
    border-radius: 0.4rem;
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
  }
`;

export default PopupModal;
