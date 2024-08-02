import styled from "styled-components";
import theme from "../styles/theme";
import { IoIosArrowUp } from "react-icons/io";

const ScrollTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <ScrollToTopButton onClick={scrollToTop}>
      <IoIosArrowUp size={theme.font.SIZE.XXXL} />
    </ScrollToTopButton>
  );
};

const ScrollToTopButton = styled.button`
  position: fixed;
  z-index: 100;
  bottom: 10rem;
  right: 2rem;
  background-color: ${theme.color.GRAY};
  color: ${theme.color.TEXT_WHITE};
  border: none;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  padding: 1.2rem;
  border-radius: 10rem;
  cursor: pointer;
  transition: opacity 0.3s ease-in-out;

  &:hover {
    opacity: 1;
  }
`;

export default ScrollTopButton;
