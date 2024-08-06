import styled from "styled-components";
import theme from "../styles/theme";
import UpArrow from "../assets/icons/up-arrow.png";
import isMobile from "is-mobile";

const ScrollTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <ScrollToTopButton onClick={scrollToTop}>
      <img src={UpArrow} />
    </ScrollToTopButton>
  );
};

const ScrollToTopButton = styled.button`
  position: fixed;
  z-index: 100;
  bottom: 10rem;
  right: ${isMobile() ? "2rem" : "37%"};
  background-color: ${theme.color.MID_GRAY};
  color: ${theme.color.WHITE};
  border: none;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  padding: 0.6rem;
  border-radius: 1rem;
  cursor: pointer;
  transition: opacity 0.3s ease-in-out;

  img {
    width: 2rem;
  }

  &:hover {
    opacity: 1;
  }
`;

export default ScrollTopButton;
