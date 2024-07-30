import styled from "styled-components";
import theme from "../styles/theme";
import DownArrow from "../assets/images/down-arrow.png";

export const Input = styled.input`
  color: ${theme.color.TEXT_BLACK};
  font-family: ${theme.font.NOTO[6]};
  font-size: ${theme.font.SIZE.M};
  padding: 0.8rem 0.8rem;
  border-radius: 0.6rem;
  border: 2px solid gray;
  width: 100%;
  cursor: pointer;
`;

export const Select = styled.select`
  color: ${theme.color.TEXT_BLACK};
  font-family: ${theme.font.NOTO[6]};
  font-size: ${theme.font.SIZE.M};
  padding: 0.8rem 0.8rem 0.8rem 0.8rem;
  border-radius: 0.6rem;
  border: 2px solid gray;
  width: 100%;
  cursor: pointer;
  appearance: none;
  background: url(${DownArrow}) no-repeat center right 12px;

  // option {
  //   color: ${theme.color.TEXT_BLACK};
  //   background: ${theme.color.PURPLE};
  //   font-family: ${theme.font.NOTO[6]};
  //   font-size: ${theme.font.SIZE.ML};
  //   padding: 0.8rem 0.4rem;
  //   border: none;
  //   cursor: pointer;
  // }
`;

export const Radio = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1.5rem;

  input {
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 0.5rem;
  }

  label {
    margin-right: 1rem;
    font-size: ${theme.font.SIZE.M};
    font-family: ${theme.font.NOTO[6]};
  }
`;
