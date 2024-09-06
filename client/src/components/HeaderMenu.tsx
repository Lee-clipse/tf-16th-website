/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import styled from "styled-components";
import theme from "../styles/theme";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { API_CODE, ROUTE_PATH, WEB_WIDTH } from "../common/const";
import { alert, getUserIdByToken, verifyByToken } from "../common/common";
import { reqGetLotteryFlag, reqUserData } from "../api/user";
import { User } from "../type/type";
import isMobile from "is-mobile";
import MenuBar from "../assets/icons/menu-bar.png";
import TopPopup from "../assets/images/toppopup.png";
import VideoModal from "./VideoModal";
import DownArrow from "../assets/icons/down-arrow.png";

const HeaderMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [userData, setUserData] = useState<User>();
  const [viewVideoModal, setViewVideoModal] = useState<boolean>(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isPopupHidden, setIsPopupHidden] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const fetchUserData = async () => {
    const userId = getUserIdByToken().toString();
    const res = await reqUserData(userId);
    setUserData(res.data.user);
  };

  useEffect(() => {
    const isTokenAlive = verifyByToken();
    setIsLogin(isTokenAlive);

    // 메인 페이지에서만 기본 재생
    if (location.pathname === ROUTE_PATH.MAIN) {
      setIsPopupOpen(true);
    }

    // 로그인, 회원가입 페이지에서는 숨기기
    if (
      location.pathname === ROUTE_PATH.JOIN ||
      location.pathname === ROUTE_PATH.REGISTER ||
      location.pathname === ROUTE_PATH.STAFF ||
      location.pathname === ROUTE_PATH.GOODS_STAFF ||
      location.pathname === ROUTE_PATH.STAFF_EVENT ||
      location.pathname === ROUTE_PATH.USER_EVENT ||
      location.pathname === ROUTE_PATH.USER_EVENT_MANAGE ||
      location.pathname === ROUTE_PATH.LOTTERY
    ) {
      setIsPopupHidden(true);
    }

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

  const handlePopupToggle = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  // [추첨 이벤트] 페이지 클릭할때마다
  const handleEnterUserEvent = async () => {
    const res = await reqGetLotteryFlag();
    const ok = Number(res.data.code) === API_CODE.SUCCESS;
    if (ok) {
      const flag = res.data.flag;
      closeMenu();
      if (flag) {
        navigate(ROUTE_PATH.USER_EVENT);
      } else {
        alert("행사 중의 추첨 이벤트를 기대해주세요!", "info");
      }
    }
  };

  return (
    <>
      {viewVideoModal && <VideoModal viewModal={(flag: boolean) => setViewVideoModal(flag)} />}

      <HeadWrapper isPopupOpen={isPopupOpen}>
        <div className="f-row f-spb v-center">
          <div id="title" onClick={() => navigate(ROUTE_PATH.MAIN)}>
            청건부산
          </div>
          <img src={MenuBar} onClick={toggleMenu} style={{ width: "2rem" }} />
        </div>
        {!isPopupHidden && (
          <div id="top-popup-box">
            <img id="top-popup" src={TopPopup} onClick={() => setViewVideoModal(true)} />
            <div id="close" onClick={() => handlePopupToggle()}>
              <img src={DownArrow} />
            </div>
          </div>
        )}
      </HeadWrapper>

      {/* 메뉴 바 */}
      <Overlay isOpen={isMenuOpen} onClick={toggleMenu}>
        <SideBarWrapper isOpen={isMenuOpen} onClick={(e) => e.stopPropagation()}>
          <SideBar>
            <div className="profile-tab">
              {isLogin && (
                <div id="welcome-text">
                  환영합니다! <span className="highlight">{userData?.name}</span> 님
                </div>
              )}
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
              onClick={() => handleEnterUserEvent()}
              className={`tab f-spb v-center h-center h ${
                location.pathname === ROUTE_PATH.USER_EVENT ? "active" : ""
              }`}
            >
              추첨 이벤트
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

const HeadWrapper = styled.div<{ isPopupOpen: boolean }>`
  position: fixed;
  width: 100%;
  max-width: ${isMobile() ? "100vw" : WEB_WIDTH};
  padding: 1.6rem 1.4rem 1rem 1.4rem;
  background-color: rgba(255, 255, 255, 0.9);
  z-index: 997;
  text-align: right;

  #top-popup-box {
    position: absolute;
    left: 0;
    bottom: 0;
    transform: translateY(90%);
    z-index: 995;

    #top-popup {
      width: ${isMobile() ? "100%" : WEB_WIDTH};
      background-color: ${theme.color.WHITE};
      padding: 1rem;
      transition: transform 0.5s ease, opacity 0.5s ease;
      transform: ${({ isPopupOpen }) => (isPopupOpen ? "translateY(0)" : "translateY(-150%)")};
      opacity: ${({ isPopupOpen }) => (isPopupOpen ? 1 : 0)};
    }

    #close {
      position: absolute;
      bottom: -26px;
      right: 0;
      padding: 1rem 1rem 0.4rem 1rem;
      border-radius: 0.8rem;
      background-color: ${theme.color.WHITE};
      transition: transform 0.5s ease;
      transform: ${({ isPopupOpen }) => (isPopupOpen ? "translateY(0)" : "translateY(-100px)")};

      img {
        width: 30px;
        height: 22px;
        transition: transform 0.5s ease;
      }
    }
  }

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
  left: ${isMobile() ? "0" : ""};
  width: 100%;
  max-width: ${isMobile() ? "100vw" : WEB_WIDTH};
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

  .h {
    color: ${theme.color.ORANGE};
    font-family: ${theme.font.NOTO[6]};
  }

  #welcome-text {
    text-align: center;
    padding: 1.4rem 0;
  }

  .highlight {
    color: ${theme.color.SKY_BLUE};
    font-family: ${theme.font.NOTO[6]};
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
