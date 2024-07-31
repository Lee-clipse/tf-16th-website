/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import theme from "../styles/theme";
import { FiMenu } from "react-icons/fi";
import { GoArrowRight, GoBold } from "react-icons/go";
import Button from "./Button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ROUTE_PATH } from "../common/const";

const HeaderMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isLoginUser, setIsLoginUser] = useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleBackButton = () => {
      if (isMenuOpen) {
        closeMenu();
        return true;
      }
      return false;
    };

    window.addEventListener("popstate", handleBackButton);
    return () => {
      window.removeEventListener("popstate", handleBackButton);
    };
  }, [isMenuOpen]);

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
      <div
        onClick={() => {
          navigate(ROUTE_PATH.JOIN);
          closeMenu();
        }}
      >
        <Button
          text="참가하기"
          backgroundColor={theme.color.MAIN_BLUE}
          textColor={theme.color.TEXT_WHITE}
        />
      </div>
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
            <PlainLink
              to={ROUTE_PATH.MAIN}
              onClick={closeMenu}
              className={`tab f-spb v-center ${
                location.pathname === ROUTE_PATH.MAIN ? "active" : ""
              }`}
            >
              홈 <GoArrowRight color={theme.color.MAIN_BLUE} fontSize={theme.font.SIZE.M} />
            </PlainLink>
            <PlainLink
              to={ROUTE_PATH.MAIN_ACTIVITY}
              onClick={closeMenu}
              className={`tab f-spb v-center ${
                location.pathname === ROUTE_PATH.MAIN_ACTIVITY ? "active" : ""
              }`}
            >
              정보 <GoArrowRight color={theme.color.MAIN_BLUE} fontSize={theme.font.SIZE.M} />
            </PlainLink>
            <PlainLink
              to={ROUTE_PATH.MAIN_EVENT}
              onClick={closeMenu}
              className={`tab f-spb v-center ${
                location.pathname === ROUTE_PATH.MAIN_EVENT ? "active" : ""
              }`}
            >
              청년 커뮤니티{" "}
              <GoArrowRight color={theme.color.MAIN_BLUE} fontSize={theme.font.SIZE.M} />
            </PlainLink>
            <PlainLink
              to={ROUTE_PATH.MAIN_ZEROGAME}
              onClick={closeMenu}
              className={`tab f-spb v-center ${
                location.pathname === ROUTE_PATH.MAIN_ZEROGAME ? "active" : ""
              }`}
            >
              연혁 <GoArrowRight color={theme.color.MAIN_BLUE} fontSize={theme.font.SIZE.M} />
            </PlainLink>
            <PlainLink
              to={ROUTE_PATH.MAIN_ZEROGAME}
              onClick={closeMenu}
              className={`tab f-spb v-center ${
                location.pathname === ROUTE_PATH.MAIN_ZEROGAME ? "active" : ""
              }`}
            >
              제로게임 <GoArrowRight color={theme.color.MAIN_BLUE} fontSize={theme.font.SIZE.M} />
            </PlainLink>
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
  z-index: 1000;
`;

const Overlay = styled.div<{ isOpen: boolean }>`
  z-index: ${(props) => (props.isOpen ? "2000" : "-100")};
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

const PlainLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  &.active {
    background-color: lightgray;
  }
`;

export default HeaderMenu;
