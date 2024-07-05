import React from "react";
import styled from "styled-components";
import theme from "../styles/theme";
import isMobile from "is-mobile";

interface WideButtonProps {
  text: string;
  backgroundColor: string;
  textColor: string;
  custom?: string;
}

const WideButton: React.FC<WideButtonProps> = ({ text, backgroundColor, textColor, custom }) => {
  return (
    <Wrapper
      backgroundColor={backgroundColor}
      textColor={textColor}
      custom={custom as string}
      className="center"
    >
      {text}
    </Wrapper>
  );
};

const Wrapper = styled.div<{ backgroundColor: string; textColor: string; custom: string }>`
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.textColor};
  padding: 1.6rem 1.2rem;
  border-radius: 1rem;
  width: ${isMobile() ? "90vw" : "340px"};
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  position: fixed;
  cursor: pointer;
  bottom: 4%;
  font-family: ${theme.font.NOTO[6]};
  font-size: ${theme.font.SIZE.M};
  ${(props) => props.custom && props.custom};
`;

export default WideButton;
