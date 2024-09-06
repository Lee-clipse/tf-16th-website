import React, { useEffect, useState } from "react";
import { Wrapper } from "./styled";
import { useNavigate } from "react-router-dom";
import {
  req1stLottery,
  reqEventCount,
  reqLottery,
  reqSetLotteryOff,
  reqSetLotteryOn,
} from "../../api/user";
import { API_CODE, ROUTE_PATH } from "../../common/const";
import HeaderMenu from "../../components/HeaderMenu";
import Loading from "../../components/Loading";
import { alert } from "../../common/common";

const UserEventManagePage = () => {
  const navigate = useNavigate();
  const [count, setCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchEventCount();
  }, []);

  const fetchEventCount = async () => {
    const res = await reqEventCount();
    setCount(res.data.count);
  };

  const handleLottery = async () => {
    setIsLoading(true);
    const res = await reqLottery();
    const ok = Number(res.data.code) === API_CODE.SUCCESS;
    if (ok) {
      setIsLoading(false);
      navigate(ROUTE_PATH.LOTTERY);
    }
  };

  const handle1stLottery = async () => {
    setIsLoading(true);
    const res = await req1stLottery();
    const ok = Number(res.data.code) === API_CODE.SUCCESS;
    if (ok) {
      setIsLoading(false);
      navigate(ROUTE_PATH.LOTTERY);
    }
  };

  const handleOpenEvent = async () => {
    const res = await reqSetLotteryOn();
    const ok = Number(res.data.code) === API_CODE.SUCCESS;
    if (ok) {
      alert("지금부터 응모 시작!", "success");
      window.location.reload();
    }
  };

  const handleCloseEvent = async () => {
    const res = await reqSetLotteryOff();
    const ok = Number(res.data.code) === API_CODE.SUCCESS;
    if (ok) {
      alert("응모 종료!", "success");
      window.location.reload();
    }
  };

  return (
    <>
      {isLoading && <Loading />}

      {/* 헤더 메뉴 */}
      <HeaderMenu />

      <Wrapper className="f-col h-center">
        <div>
          참여 인원 수: <span className="h">{count}</span>명
        </div>
        <div id="l-btn" className="btn" onClick={() => handleLottery()}>
          🎲 추첨하기
        </div>
        <div id="r-btn" className="btn" onClick={() => handle1stLottery()}>
          🥇 1등 추첨하기
        </div>

        <div id="open-btn" className="btn" onClick={() => handleOpenEvent()}>
          🏁 추첨 열기
        </div>
        <div id="cls-btn" className="btn" onClick={() => handleCloseEvent()}>
          ⛔ 추첨 닫고 초기화
        </div>
      </Wrapper>
    </>
  );
};

export default UserEventManagePage;
