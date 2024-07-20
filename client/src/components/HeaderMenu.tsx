/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import styled from "styled-components";
import theme from "../styles/theme";
import { FiMenu } from "react-icons/fi";
import { GoArrowRight, GoBold } from "react-icons/go";
import Button from "./Button";

const HeaderMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isLoginUser, setIsLoginUser] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const ProfileTabWelcomeBox = () => {
    return (
      <>
        <p>환영합니다!</p>
        <p>OOO 님</p>
      </>
    );
  };

  const ProfileTabJoinBox = () => {
    return (
      <>
        <Button
          text="참가하기"
          backgroundColor={theme.color.MAIN_BLUE}
          textColor={theme.color.TEXT_WHITE}
        />
      </>
    );
  };

  return (
    <>
      <HeadWrapper>
        <FiMenu fontSize={30} onClick={toggleMenu} />
      </HeadWrapper>

      {/* 메뉴 바 */}
      <Overlay isOpen={isMenuOpen} onClick={toggleMenu}>
        <SideBarWrapper isOpen={isMenuOpen} onClick={(e) => e.stopPropagation()}>
          <SideBar>
            <div className="tab profile-tab">
              {isLoginUser ? <ProfileTabWelcomeBox /> : <ProfileTabJoinBox />}
            </div>
            <div className="tab f-spb v-center">
              활동 <GoArrowRight color={theme.color.MAIN_BLUE} fontSize={theme.font.SIZE.M} />
            </div>
            <div className="tab f-spb v-center">
              행사 <GoArrowRight color={theme.color.MAIN_BLUE} fontSize={theme.font.SIZE.M} />
            </div>
            <div className="tab f-spb v-center">
              제로게임 <GoArrowRight color={theme.color.MAIN_BLUE} fontSize={theme.font.SIZE.M} />
            </div>
          </SideBar>
        </SideBarWrapper>
      </Overlay>
    </>
  );
};

const HeadWrapper = styled.div`
  position: fixed;
  width: 100%;
  padding: 1rem 1.4rem;
  background-color: ${theme.color.BACKGROUND};
  border-bottom: 1px solid lightgray;
`;

const Overlay = styled.div<{ isOpen: boolean }>`
  z-index: ${(props) => (props.isOpen ? "100" : "-100")};
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  position: fixed;
  overflow: auto;
  transition: opacity 0.3s, z-index 0.3s;
  opacity: ${(props) => (props.isOpen ? "1" : "0")};
`;

const SideBarWrapper = styled.div<{ isOpen: boolean }>`
  position: fixed;
  background-color: ${theme.color.BACKGROUND};
  top: 0;
  left: ${(props) => (props.isOpen ? "0" : "-72%")};
  width: 70%;
  height: 100%;
  box-shadow: 2px 0 4px rgba(0, 0, 0, 0.3);
  overflow: auto;
  transition: left 0.3s;
`;

const SideBar = styled.div`
  .tab {
    padding: 2rem 2rem 2rem 1.6rem;
    font-family: ${theme.font.NOTO[5]};
    font-size: ${theme.font.SIZE.M};
    border-bottom: 1px solid lightgray;
  }
`;

export default HeaderMenu;
