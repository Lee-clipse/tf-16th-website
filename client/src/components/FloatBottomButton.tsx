import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { isStaffByToken, verifyByToken } from "../common/common";
import WideButton from "./WideButton";
import { ROUTE_PATH } from "../common/const";
import theme from "../styles/theme";
import ScrollTopButton from "./ScrollTopButton";
import styled from "styled-components";
import EventMiniButton from "./EventMiniButton";

const FloatBottomButton = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState<boolean>(false);

  useEffect(() => {
    const isTokenAlive = verifyByToken();
    setIsLogin(isTokenAlive);
  }, []);

  const setFloatButtonComponent = () => {
    const isStaff = isStaffByToken();

    // 미로그인이라면 ->  참가 버튼
    if (!isLogin) {
      return (
        <div className="h-center v-center" onClick={() => navigate(ROUTE_PATH.JOIN)}>
          <WideButton
            text="청건부산 참가하기 ✨"
            backgroundColor={theme.color.SKY_BLUE}
            textColor={theme.color.WHITE}
          />
        </div>
      );
    }
    // 스탭이라면 -> 관리 버튼
    if (isStaff) {
      return (
        <div className="h-center v-center" onClick={() => navigate(ROUTE_PATH.STAFF)}>
          <WideButton
            text="스탭 페이지로 가기 🔧"
            backgroundColor={theme.color.PURPLE}
            textColor={theme.color.WHITE}
          />
        </div>
      );
    }
    // 스탭은 아니지만 로그인 유저라면 -> 제로게임 버튼
    else {
      return (
        <div className="h-center v-center" onClick={() => navigate(ROUTE_PATH.ZG_LOGO)}>
          <WideButton
            text="제로게임하러 가기 🎲"
            backgroundColor={theme.color.TEAL_BLUE}
            textColor={theme.color.WHITE}
          />
        </div>
      );
    }
  };

  return (
    <>
      {/* 참가 버튼 */}
      <BottomFloatButton>{setFloatButtonComponent()}</BottomFloatButton>

      {/* 최상단 이동 버튼 */}
      <ScrollTopButton />

      {/* 이벤트 팝업 버튼 */}
      <EventMiniButton />
    </>
  );
};

export const BottomFloatButton = styled.div`
  z-index: 100;
`;

export default FloatBottomButton;
