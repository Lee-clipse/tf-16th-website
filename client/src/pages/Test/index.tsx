import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import styled from "styled-components";
import theme from "../../styles/theme";
import InstaLogo from "../../assets/images/insta_logo.webp";

const TestPage = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <div style={{ backgroundColor: "palegreen", height: "500px" }}></div>

      <CountUpItem className="f-row">
        <CountUp start={0} end={300} duration={1} />
        <p>명의 스텝</p>
      </CountUpItem>

      <div style={{ backgroundColor: "palegreen", height: "500px" }}></div>

      <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
        {({ isVisible }: { isVisible: boolean }) => (
          <FadeInItem className={`f-row ${isVisible ? "visible" : "hidden"}`}>
            {isVisible ? <img src={InstaLogo} /> : null}
            <p>-</p>
          </FadeInItem>
        )}
      </VisibilitySensor>

      <div style={{ backgroundColor: "palegreen", height: "500px" }}></div>

      <ScrollToTopButton onClick={scrollToTop}>Top</ScrollToTopButton>
    </div>
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

export default TestPage;
