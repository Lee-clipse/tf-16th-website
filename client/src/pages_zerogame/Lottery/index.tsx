import React, { useEffect, useState } from "react";
import { Wrapper } from "./styled";
import { reqEventResult } from "../../api/user";
import { API_CODE, ROUTE_PATH } from "../../common/const";
import HeaderMenu from "../../components/HeaderMenu";
import { LotteryUser } from "../../type/type";
import { useNavigate } from "react-router-dom";

const LotteryPage = () => {
  const navigate = useNavigate();
  const [lotteryUser, setLotteryUser] = useState<LotteryUser>();

  useEffect(() => {
    fetchLottery();
  }, []);

  const fetchLottery = async () => {
    const res = await reqEventResult();
    const ok = Number(res.data.code) === API_CODE.SUCCESS;
    if (ok) {
      setLotteryUser(res.data.user);
    }
  };

  return (
    <>
      {/* 헤더 메뉴 */}
      <HeaderMenu />

      <Wrapper className="f-col h-center">
        {lotteryUser ? (
          <>
            <div id="title">당첨자</div>
            <div id="p">
              {lotteryUser?.id}번 {lotteryUser?.name} {lotteryUser?.phoneNumber.slice(-4)}
            </div>
            <div id="c">🎉 축하합니다!! 🎉</div>
            <div id="b-btn" onClick={() => navigate(ROUTE_PATH.USER_EVENT)}>
              응모 페이지로 돌아가기
            </div>
          </>
        ) : (
          <>
            <div>
              <div style={{ marginBottom: "6rem" }}>아직 추첨 전입니다!</div>
              <div id="b-btn" onClick={() => navigate(ROUTE_PATH.USER_EVENT)}>
                응모 페이지로 돌아가기
              </div>
            </div>
          </>
        )}
      </Wrapper>
    </>
  );
};

export default LotteryPage;
