import styled from "styled-components";
import theme from "../styles/theme";
import PresentBox from "../assets/icons/present-box.png";
import isMobile from "is-mobile";
import { useState } from "react";
import PopupModal from "./Popup";

const EventMiniButton = () => {
  const [viewPopup, setViewPopup] = useState<boolean>(false);

  return (
    <>
      {/* 팝업 */}
      {viewPopup && (
        <PopupModal viewPopup={(flag: boolean) => setViewPopup(flag)} isClickable={true} />
      )}

      <Wrapper onClick={() => setViewPopup(true)}>
        <img src={PresentBox} />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.button`
  position: fixed;
  z-index: 100;
  bottom: 14rem;
  right: ${isMobile() ? "2rem" : "37%"};
  background-color: ${theme.color.PURPLE};
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

export default EventMiniButton;
