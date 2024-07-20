import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import styled from "styled-components";
import theme from "../../styles/theme";

const TestPage = () => {
  return (
    <div className="col-lg-3 col-md-6">
      <div className="stats-item text-center w-100 h-100">
        <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
          {({ isVisible }: { isVisible: boolean }) => (
            <CountUpItem className="f-row">
              {isVisible ? <CountUp start={0} end={300} duration={1} /> : null}
              <p>명의 스텝</p>
            </CountUpItem>
          )}
        </VisibilitySensor>
      </div>
    </div>
  );
};

const CountUpItem = styled.div`
  font-family: ${theme.font.NOTO[8]};
  font-size: ${theme.font.SIZE.XXL};
`;

export default TestPage;
