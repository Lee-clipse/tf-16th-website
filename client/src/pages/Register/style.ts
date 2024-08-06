import styled from "styled-components";
import theme from "../../styles/theme";

export const InputSection = styled.div`
  color: ${theme.color.BLACK};
  font-family: ${theme.font.NOTO[6]};
  font-size: ${theme.font.SIZE.ML};
  padding: 9rem 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow-y: scroll;

  .box {
    margin: 1rem 0 1.6rem 0;
  }

  .label {
    margin: 0 0 1rem 0;
  }

  .br {
    margin: 1rem 0;
  }

  .desc {
    font-family: ${theme.font.NOTO[6]};
    font-size: ${theme.font.SIZE.SM};
    color: ${theme.color.MID_GRAY};
    margin-bottom: 1rem;
  }
`;

export const TermsDropdown = styled.div<{ isTermsOpen: boolean }>`
  overflow: hidden;
  max-height: ${({ isTermsOpen }) => (isTermsOpen ? "500px" : "0")};
  transition: max-height 0.5s ease-in-out;
  margin-top: 2rem;
  font-family: ${theme.font.NOTO[6]};
  font-size: ${theme.font.SIZE.SM};
  color: ${theme.color.MID_GRAY};
  line-height: 1.8rem;
`;

export const TermsButton = styled.button`
  background: none;
  border: none;
  font-family: ${theme.font.NOTO[6]};
  color: ${theme.color.MID_GRAY};
  cursor: pointer;
  text-decoration: underline;
  margin-top: 1.6rem;
`;
