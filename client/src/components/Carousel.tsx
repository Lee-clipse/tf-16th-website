import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";
import { useSwipeable } from "react-swipeable";
import styled from "styled-components";
import theme from "../styles/theme";

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
    <div>
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
      </CarouselContainer>

      <IndicatorContainer className="h-center">
        {imageList.map((_, index) => (
          <Dot key={index} isActive={index === currentIndex} />
        ))}
      </IndicatorContainer>
    </div>
  );
};

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
`;

const ImageContainer = styled.div<{ currentIndex: number }>`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: translateX(${(props) => -props.currentIndex * 100}%);
`;

const CarouselImage = styled.img`
  width: 100%;
  height: 200px; // 이미지 크기랑 맞춰야 함
  object-fit: cover;
`;

const ArrowButton = styled.button<{ direction: string }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${(props) => (props.direction === "left" ? "left: 6px;" : "right: 6px;")}
  color: ${theme.color.TEXT_WHITE};
  font-weight: bold;
  font-size: 4rem;
  border: none;
  cursor: pointer;
  border-radius: 50%;
  z-index: 10;
`;

const IndicatorContainer = styled.div`
  margin-top: 1.4rem;
  display: flex;
  gap: 8px;
  width: 100%;
`;

const Dot = styled.div<{ isActive: boolean }>`
  width: 12px;
  height: 12px;
  background-color: ${(props) => (props.isActive ? theme.color.TEXT_BLACK : theme.color.GRAY)};
  border-radius: 50%;
`;

export default Carousel;
