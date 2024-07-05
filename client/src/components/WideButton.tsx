import React from "react";
import styled from "styled-components";
import theme from "../styles/theme";

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
  width: 90vw;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  position: fixed;
  bottom: 4%;
  font-family: ${theme.font.NOTO[6]};
  font-size: ${theme.font.SIZE.M};
  ${(props) => props.custom && props.custom};
`;

export default WideButton;
