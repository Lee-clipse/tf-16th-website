import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import styled from "styled-components";
import theme from "../../styles/theme";
import InstaLogo from "../../assets/images/insta_logo.webp";

const TestPage = () => {
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

export default TestPage;
