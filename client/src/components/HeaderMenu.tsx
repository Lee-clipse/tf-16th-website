/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import styled from "styled-components";
import theme from "../styles/theme";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ROUTE_PATH } from "../common/const";
import { getUserPkByToken, guardAlert, verifyByToken } from "../common/common";
import { reqUserData } from "../api/user";
import { User } from "../type/type";
import isMobile from "is-mobile";
import MenuBar from "../assets/icons/menu-bar.png";

const HeaderMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [userData, setUserData] = useState<User>();

  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const fetchUserData = async () => {
    const userPk = getUserPkByToken().toString();
    const res = await reqUserData(userPk);
    setUserData(res.data.user);
  };

  useEffect(() => {
    const isTokenAlive = verifyByToken();
    setIsLogin(isTokenAlive);

    if (isTokenAlive) {
      fetchUserData();
    }
  }, []);

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

  return (
    <>
      <HeadWrapper className="f-row f-spb v-center">
        <div id="title" onClick={() => navigate(ROUTE_PATH.MAIN)}>
          청건부산
        </div>
        <img src={MenuBar} onClick={toggleMenu} style={{ width: "2rem" }} />
      </HeadWrapper>

      {/* 메뉴 바 */}
      <Overlay isOpen={isMenuOpen} onClick={toggleMenu}>
        <SideBarWrapper isOpen={isMenuOpen} onClick={(e) => e.stopPropagation()}>
          <SideBar>
            <div className="profile-tab">
              {isLogin && <div id="welcome-text">환영합니다! {userData?.name} 님</div>}
            </div>
            <PlainLink
              to={"/"}
              // to={ROUTE_PATH.MAIN}
              onClick={() => {
                closeMenu();
              }}
              className={`tab f-spb v-center h-center ${
                location.pathname === ROUTE_PATH.MAIN ? "active" : ""
              }`}
            >
              홈
            </PlainLink>
            <PlainLink
              to={ROUTE_PATH.INFO}
              onClick={() => {
                closeMenu();
              }}
              className={`tab f-spb v-center h-center ${
                location.pathname === ROUTE_PATH.INFO ? "active" : ""
              }`}
            >
              정보
            </PlainLink>
            <PlainLink
              to={ROUTE_PATH.COMMUNITY}
              onClick={() => {
                closeMenu();
              }}
              className={`tab f-spb v-center h-center ${
                location.pathname === ROUTE_PATH.COMMUNITY ? "active" : ""
              }`}
            >
              청년 커뮤니티{" "}
            </PlainLink>
            <PlainLink
              to={ROUTE_PATH.HISTORY}
              onClick={() => {
                closeMenu();
              }}
              className={`tab f-spb v-center h-center ${
                location.pathname === ROUTE_PATH.HISTORY ? "active" : ""
              }`}
            >
              연혁
            </PlainLink>
            <PlainLink
              to={"/"}
              // to={ROUTE_PATH.MAIN_ZEROGAME}
              onClick={() => {
                closeMenu();
                guardAlert();
              }}
              className={`tab f-spb v-center h-center ${
                location.pathname === ROUTE_PATH.MAIN_ZEROGAME ? "active" : ""
              }`}
            >
              제로게임
            </PlainLink>
            {isLogin && (
              <PlainLink
                to={ROUTE_PATH.MY_PAGE}
                onClick={() => {
                  closeMenu();
                }}
                className={`tab f-spb v-center h-center ${
                  location.pathname === ROUTE_PATH.MY_PAGE ? "active" : ""
                }`}
              >
                마이 페이지
              </PlainLink>
            )}
          </SideBar>
        </SideBarWrapper>
      </Overlay>
    </>
  );
};

const HeadWrapper = styled.div`
  position: fixed;
  width: 100%;
  max-width: ${isMobile() ? "100vw" : "375px"};
  padding: 1.6rem 1.4rem;
  background-color: rgba(255, 255, 255, 0.9);
  z-index: 1000;
  text-align: right;

  #title {
    font-family: ${theme.font.HAK[5]};
    font-size: ${theme.font.SIZE.XL};
    color: ${theme.color.BLACK};
    padding-top: 0.6rem;
  }
`;

const Overlay = styled.div<{ isOpen: boolean }>`
  z-index: ${(props) => (props.isOpen ? "2000" : "-100")};
  width: 100%;
  height: 100%;
  position: fixed;
  overflow: auto;
  transition: opacity 0.3s, z-index 0.3s;
  opacity: ${(props) => (props.isOpen ? "1" : "0")};
`;

const SideBarWrapper = styled.div<{ isOpen: boolean }>`
  position: fixed;
  background-color: rgba(255, 255, 255, 0.9);
  top: ${(props) => (props.isOpen ? "5.4rem" : "5rem")};
  left: 0;
  width: 100%;
  max-width: ${isMobile() ? "100vw" : "375px"};
  box-shadow: 2px 0 4px rgba(0, 0, 0, 0.3);
  overflow: auto;
  transition: top 0.4s;
`;

const SideBar = styled.div`
  font-family: ${theme.font.NOTO[5]};
  font-size: ${theme.font.SIZE.M};

  .tab {
    padding: 1.2rem 0;
  }

  #welcome-text {
    text-align: center;
    padding: 1.4rem 0;
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
