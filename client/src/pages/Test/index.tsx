/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import styled from "styled-components";
import theme from "../../styles/theme";
import BlogLogo from "../../assets/images/blog_logo.webp";
import InstaLogo from "../../assets/images/insta_logo.webp";
import YoutubeLogo from "../../assets/images/youtube_logo.webp";
import { useSwipeable } from "react-swipeable";
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";

interface CarouselProps {
  imageList: string[];
}

export const CarouselComponent: React.FC<CarouselProps> = ({ imageList }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imageList.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + imageList.length) % imageList.length);
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    trackMouse: true,
  });

  return (
    <CarouselContainer>
      <ImageContainer {...handlers} currentIndex={currentIndex}>
        {imageList.map((image, index) => (
          <CarouselImage key={index} src={image} alt={`Slide ${index}`} />
        ))}
      </ImageContainer>

      <ArrowButton onClick={handlePrev} direction="left">
        <MdOutlineArrowBackIos />
      </ArrowButton>

      <ArrowButton onClick={handleNext} direction="right">
        <MdOutlineArrowForwardIos />
      </ArrowButton>

      <IndicatorContainer className="h-center">
        {imageList.map((_, index) => (
          <Dot key={index} isActive={index === currentIndex} />
        ))}
      </IndicatorContainer>
    </CarouselContainer>
  );
};

const TestPage = () => {
  const CountUpComponent = () => {
    return (
      <CountUpItem className="f-row">
        <CountUp start={0} end={300} duration={1} />
        <p>명의 스탭</p>
      </CountUpItem>
    );
  };

  const FadeInComponent = () => {
    return (
      <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
        {({ isVisible }: { isVisible: boolean }) => (
          <FadeInItem className={`f-row ${isVisible ? "visible" : "hidden"}`}>
            {isVisible ? <img src={InstaLogo} /> : null}
            <p>-</p>
          </FadeInItem>
        )}
      </VisibilitySensor>
    );
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div style={{ backgroundColor: "palegreen", height: "500px" }}></div>
      <CountUpComponent />

      <div style={{ backgroundColor: "palegreen", height: "500px" }}></div>
      <FadeInComponent />

      <div style={{ backgroundColor: "palegreen", height: "500px" }}></div>
      <CarouselComponent />

      <div style={{ backgroundColor: "palegreen", height: "500px" }}></div>
      <ScrollToTopButton onClick={scrollToTop}>Top</ScrollToTopButton>
    </>
  );
};

const CountUpItem = styled.div`
  font-family: ${theme.font.NOTO[8]};
  font-size: ${theme.font.SIZE.XXL};
`;

const FadeInItem = styled.div`
  opacity: 0;
  transition: opacity 1s ease-in-out;
  height: 81px;
  &.visible {
    opacity: 1;
  }
`;

const ScrollToTopButton = styled.button`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background-color: ${theme.color.MAIN_BLUE};
  color: ${theme.color.TEXT_WHITE};
  border: none;
  padding: 2rem;
  border-radius: 10rem;
  cursor: pointer;
  transition: opacity 0.3s ease-in-out;

  &:hover {
    opacity: 1;
  }
`;

const CarouselContainer = styled.div`
  position: relative;
  width: 212px;
  margin: 0 auto;
  overflow: hidden;
`;

const ImageContainer = styled.div<{ currentIndex: number }>`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: translateX(${(props) => -props.currentIndex * 95}%);
`;

const CarouselImage = styled.img`
  width: 100%;
  height: 300px; // 이미지 크기랑 맞춰야 함
  object-fit: cover;
`;

const ArrowButton = styled.button<{ direction: string }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${(props) => (props.direction === "left" ? "left: 6px;" : "right: 6px;")}
  color: ${theme.color.TEXT_BLACK};
  font-weight: bold;
  font-size: 4rem;
  border: none;
  cursor: pointer;
  border-radius: 50%;
  z-index: 10;
`;

const IndicatorContainer = styled.div`
  position: absolute;
  bottom: 10px;
  display: flex;
  gap: 8px;
  width: 100%;
`;

const Dot = styled.div<{ isActive: boolean }>`
  width: 12px;
  height: 12px;
  background-color: ${(props) =>
    props.isActive ? theme.color.TEXT_BLACK : theme.color.TEXT_WHITE};
  border-radius: 50%;
`;

export default TestPage;
