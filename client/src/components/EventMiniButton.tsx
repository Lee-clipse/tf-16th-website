import styled from "styled-components";
import theme from "../styles/theme";
import PresentBox from "../assets/icons/present-box.png";
import isMobile from "is-mobile";
import { useState } from "react";
import PopupModal from "./Popup";
import Popup1_1 from "../assets/images/popup1-1.webp";
import Popup1_2 from "../assets/images/popup1-2.webp";
import Popup1_3 from "../assets/images/popup1-3.webp";
import Popup1_4 from "../assets/images/popup1-4.webp";
import Popup2_1 from "../assets/images/popup2-1.webp";
import Popup2_2 from "../assets/images/popup2-2.webp";

const EventMiniButton = () => {
  const [viewPopup1, setViewPopup1] = useState<boolean>(false);
  const [viewPopup2, setViewPopup2] = useState<boolean>(false);

  return (
    <>
      {/* 팝업 */}
      {viewPopup1 && (
        <PopupModal
          viewPopup={(flag: boolean) => setViewPopup1(flag)}
          isClickable={true}
          imageList={[Popup1_1, Popup1_2, Popup1_3, Popup1_4]}
          tokenName="popup1"
        />
      )}
      {viewPopup2 && (
        <PopupModal
          viewPopup={(flag: boolean) => setViewPopup2(flag)}
          isClickable={true}
          imageList={[Popup2_1, Popup2_2]}
          tokenName="popup2"
        />
      )}
      <Wrapper
        onClick={() => {
          setViewPopup1(true);
          setViewPopup2(true);
        }}
      >
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
