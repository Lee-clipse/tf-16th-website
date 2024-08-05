import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import { useSwipeable } from "react-swipeable";
import styled from "styled-components";
import theme from "../styles/theme";
import LeftArrow from "../assets/icons/left-arrow.png";
import RightArrow from "../assets/icons/right-arrow.png";

interface CarouselProps {
  imageObjectList: { image: string; link: string }[];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const CarouselComponent: React.FC<CarouselProps> = ({ imageObjectList }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imageObjectList.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + imageObjectList.length) % imageObjectList.length
    );
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    trackMouse: true,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <CarouselContainer>
        <ImageContainer {...handlers} currentIndex={currentIndex}>
          {imageObjectList.map((imageObject, index) => (
            <CarouselImage
              onClick={() => window.open(imageObject.link, "_blank", "noopener, noreferrer")}
              key={index}
              src={imageObject.image}
              alt={`Slide ${index}`}
            />
          ))}
        </ImageContainer>

        <ArrowButton onClick={handlePrev} direction="left">
          <img src={LeftArrow} />
        </ArrowButton>

        <ArrowButton onClick={handleNext} direction="right">
          <img src={RightArrow} />
        </ArrowButton>
      </CarouselContainer>

      <IndicatorContainer className="h-center">
        {imageObjectList.map((_, index) => (
          <Dot key={index} isActive={index === currentIndex} />
        ))}
      </IndicatorContainer>
    </div>
  );
};

const CarouselContainer = styled.div`
  position: relative;
  width: 300px;
  margin: 0 auto;
  overflow: hidden;
`;

const ImageContainer = styled.div<{ currentIndex: number }>`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: translateX(${(props) => -props.currentIndex * 100}%);
`;

const CarouselImage = styled.img`
  // width: 92vw;
  // width: 100%;
  width: 300px;
  // height: 200px; // 이미지 크기랑 맞춰야 함
  // object-fit: cover;
`;

const ArrowButton = styled.button<{ direction: string }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${(props) => (props.direction === "left" ? "left: 6px;" : "right: 6px;")}
  color: ${theme.color.WHITE};
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
  background-color: ${(props) => (props.isActive ? theme.color.BLACK : theme.color.GRAY)};
  border-radius: 50%;
`;

export default Carousel;
