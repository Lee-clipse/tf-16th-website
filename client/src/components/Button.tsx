import React from "react";
import styled from "styled-components";
import theme from "../styles/theme";

interface ButtonProps {
  text: string;
  backgroundColor: string;
  textColor: string;
  custom?: string;
}

const Button: React.FC<ButtonProps> = ({ text, backgroundColor, textColor, custom }) => {
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

const Wrapper = styled.div<{
  backgroundColor: string;
  textColor: string;
  custom: string;
}>`
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.textColor};
  padding: 1.4rem 1.2rem;
  border-radius: 0.8rem;
  cursor: pointer;
  font-family: ${theme.font.NOTO[6]};
  font-size: ${theme.font.SIZE.M};
  ${(props) => props.custom && props.custom};
  text-align: center;
`;

export default Button;
