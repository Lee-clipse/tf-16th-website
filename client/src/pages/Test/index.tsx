/* eslint-disable @typescript-eslint/no-unused-vars */
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import styled from "styled-components";
import theme from "../../styles/theme";
import InstaLogo from "../../assets/images/insta_logo.webp";

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

  return (
    <>
      <div style={{ backgroundColor: "palegreen", height: "500px" }}></div>
      <CountUpComponent />

      <div style={{ backgroundColor: "palegreen", height: "500px" }}></div>
      <FadeInComponent />

      <div style={{ backgroundColor: "palegreen", height: "500px" }}></div>

      <div style={{ backgroundColor: "palegreen", height: "500px" }}></div>
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
export default TestPage;
